import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, runTransaction } from "firebase/firestore";
import { db } from "../../firebase";

const names = new Set(["sofa", "mattress", "carpet", "glass"]);
const imagesRef = collection(db, "lumora_service_images");

export function useServiceImages() {
  const [records, setRecords] = useState({});
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const ids = ["sofa", "mattress", "carpet", "glass"];
    const loaded = new Map();
    const cached = new Map();
    let active = true;
    let failure = null;

    setStatus("loading");

    const unsubscribers = ids.map(id =>
      onSnapshot(
        doc(imagesRef, id),
        { includeMetadataChanges: true },
        snapshot => {
          if (!active || failure) return;

          loaded.set(id, true);
          cached.set(id, snapshot.metadata.fromCache);

          setRecords(previous => {
            const next = { ...previous };

            if (!snapshot.exists()) {
              delete next[id];
              return next;
            }

            const value = snapshot.data();

            if (
              typeof value.image === "string" &&
              (
                value.image === "" ||
                /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(value.image)
              )
            ) {
              next[id] = {
                image: value.image,
                rev: Number.isInteger(value.rev) ? value.rev : 0
              };
            } else {
              delete next[id];
            }

            return next;
          });

          if (loaded.size === ids.length) {
            const anyCached = ids.some(key => cached.get(key));
            setStatus(anyCached ? "offline" : "ready");
          }
        },
        error => {
          if (!active) return;

          failure = error;
          setStatus(
            error.code === "permission-denied" ? "denied" : "error"
          );
        }
      )
    );

    return () => {
      active = false;
      unsubscribers.forEach(unsubscribe => unsubscribe());
    };
  }, []);

  return { records, status };
}
export async function saveServiceImage(serviceId, image, expectedRev) {
  if (!names.has(serviceId)) throw Error("خدمة غير معروفة.");

  if (typeof image !== "string" || image.length > 200000 ||
      (image && !/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(image))) {
    throw Error("صيغة الصورة غير مدعومة.");
  }

  const ref = doc(imagesRef, serviceId);

  await runTransaction(db, async tx => {
    const snapshot = await tx.get(ref);
    const previous = snapshot.exists() ? snapshot.data() : null;
    const revision = previous?.rev || 0;

    if (revision !== expectedRev) {
      throw Error("CONFLICT");
    }

    tx.set(ref, {
      image,
      rev: revision + 1
    });
  });
}