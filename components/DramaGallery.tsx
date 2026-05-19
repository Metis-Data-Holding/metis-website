"use client";

import { useState } from "react";
import { Lightbox, type LightboxImage, type LightboxLabels } from "./Lightbox";

type Props = {
  slots: LightboxImage[];
  labels: LightboxLabels;
};

const SLOT_MODIFIERS = ["feature", "", "", "", ""] as const;

export function DramaGallery({ slots, labels }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="drama-slots">
        {slots.map((slot, i) => {
          const modifier = SLOT_MODIFIERS[i] ?? "";
          return (
            <button
              key={slot.src}
              type="button"
              className={`drama-slot ${modifier}`.trim()}
              onClick={() => setOpenIndex(i)}
              aria-label={slot.alt}
            >
              <div className="drama-slot-inner" aria-hidden="true" />
              {slot.video ? (
                <video
                  src={slot.video}
                  poster={slot.src}
                  className="drama-slot-video"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  aria-hidden="true"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={slot.src}
                  alt=""
                  className="drama-slot-img"
                  loading={i === 0 ? "eager" : "lazy"}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
      <Lightbox
        images={slots}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        labels={labels}
      />
    </>
  );
}
