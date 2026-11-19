import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, runTransaction } from "firebase/firestore";
import { db } from "../../firebase";

const galleryRef = collection(db, "lumora_gallery");

function mergePairs(originals, records) {
  const pairs = new Map();

  originals.forEach((pair, index) => {
    const id = "original-" + (index + 1);
    pairs.set(id, { ...pair, id, rev: 0 });
  });

  for (const record of [...records].sort((a, b) => a.id.localeCompare(b.id))) {
    const original = pairs.get(record.id);
    const before = record.before || original?.before;
    const after = record.after || original?.after;

    if (before && after) {
      pairs.set(record.id, { id: record.id, before, after, rev: record.rev });
    }
  }

  return [...pairs.values()];
}

export function useGallery(originals) {
  const [records, setRecords] = useState([]);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setStatus("loading");
    return onSnapshot(
      galleryRef,
      { includeMetadataChanges: true },
      snapshot => {
        setRecords(snapshot.docs.map(item => ({ ...item.data(), id: item.id })));
        setStatus(snapshot.metadata.fromCache ? "offline" : "ready");
      },
      error => setStatus(error.code === "permission-denied" ? "denied" : "error")
    );
  }, [attempt]);

  return {
    pairs: mergePairs(originals, records),
    status,
    retry: () => setAttempt(value => value + 1)
  };
}

export async function savePair(pair, changes) {
  const ref = doc(galleryRef, pair.id);

  await runTransaction(db, async transaction => {
    const previous = (await transaction.get(ref)).data();

    if ((previous?.rev || 0) !== pair.rev) {
      throw new Error("CONFLICT");
    }

    transaction.set(ref, {
      before: changes.before || previous?.before || "",
      after: changes.after || previous?.after || "",
      rev: pair.rev + 1
    });
  });
}

export async function preparePhoto(file) {
  if (file.size > 25 * 1024 * 1024) {
    throw new Error("الصورة أكبر من 25 ميغابايت. اختار نسخة أصغر.");
  }

  const url = URL.createObjectURL(file);

  try {
    const image = new Image();
    image.src = url;

    try {
      await image.decode();
    } catch {
      throw new Error("تعذّر فتح الصورة. جرّب JPG أو PNG أو WebP.");
    }

    const canvas = document.createElement("canvas");

    for (const maxSide of [1440, 1200, 960, 720]) {
      const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));

      const context = canvas.getContext("2d");
      context.fillStyle = "#fff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      for (const quality of [0.84, 0.72, 0.6]) {
        const result = canvas.toDataURL("image/jpeg", quality);
        if (result.startsWith("data:image/jpeg;base64,") && result.length <= 200000) {
          return result;
        }
      }
    }

    throw new Error("تعذّر تصغير الصورة. جرّب نسخة أصغر.");
  } finally {
    URL.revokeObjectURL(url);
  }
}
