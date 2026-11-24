import { useEffect, useState } from "react";
import { doc, onSnapshot, runTransaction } from "firebase/firestore";
import { db } from "../../firebase";

const HERO_IDS = ["hero-sofa", "hero-carpet"];

export function useHeroImages() {
  const [records, setRecords] = useState({});
  const [states, setStates] = useState({});

  useEffect(() => {
    let active = true;
    const unsubscribers = HERO_IDS.map(id =>
      onSnapshot(
        doc(db, "lumora_service_images", id),
        { includeMetadataChanges: true },
        snapshot => {
          if (!active) return;
          const data = snapshot.exists() ? snapshot.data() : null;

          setRecords(previous => ({
            ...previous,
            [id]: data && (
              data.image === "" ||
              (typeof data.image === "string" &&
               data.image.length <= 200000 &&
               /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(data.image))
            )
              ? { image: data.image, rev: data.rev || 0 }
              : { image: "", rev: 0 }
          }));

          setStates(previous => ({
            ...previous,
            [id]: snapshot.metadata.fromCache ? "offline" : "ready"
          }));
        },
        error => {
          if (!active) return;
          setStates(previous => ({
            ...previous,
            [id]: error.code === "permission-denied" ? "denied" : "error"
          }));
        }
      )
    );

    return () => {
      active = false;
      unsubscribers.forEach(unsubscribe => unsubscribe());
    };
  }, []);

  const status = HERO_IDS.some(id => states[id] === "denied")
    ? "denied"
    : HERO_IDS.some(id => states[id] === "error")
      ? "error"
      : HERO_IDS.every(id => states[id] === "ready")
        ? "ready"
        : HERO_IDS.some(id => states[id] === "offline")
          ? "offline"
          : "loading";

  return { records, status };
}

export async function saveHeroImage(id, image, expectedRev) {
  if (!HERO_IDS.includes(id)) throw Error("INVALID_HERO");
  if (
    typeof image !== "string" ||
    image.length > 200000 ||
    (image !== "" &&
      !/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(image))
  ) {
    throw Error("INVALID_IMAGE");
  }

  const ref = doc(db, "lumora_service_images", id);

  await runTransaction(db, async transaction => {
    const snap = await transaction.get(ref);
    const rev = snap.exists() ? snap.data().rev : 0;

    if (rev !== expectedRev) throw Error("CONFLICT");

    transaction.set(ref, {
      image,
      rev: rev + 1
    });
  });
}