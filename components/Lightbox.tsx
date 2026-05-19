"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type LightboxImage = { src: string; alt: string; video?: string };
export type LightboxLabels = { close: string; prev: string; next: string };

type Props = {
  images: LightboxImage[];
  openIndex: number | null;
  onClose: () => void;
  labels: LightboxLabels;
};

export function Lightbox({ images, openIndex, onClose, labels }: Props) {
  const [index, setIndex] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const isOpen = openIndex !== null;
  const count = images.length;

  useEffect(() => {
    if (openIndex !== null) setIndex(openIndex);
  }, [openIndex]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) closeBtnRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
        return;
      }
      if (e.key === "Tab") {
        const focusables = [closeBtnRef.current, prevBtnRef.current, nextBtnRef.current].filter(
          (el): el is HTMLButtonElement => el !== null,
        );
        if (focusables.length === 0) return;
        const active = document.activeElement as HTMLButtonElement | null;
        const currentIdx = active ? focusables.indexOf(active) : -1;
        const dir = e.shiftKey ? -1 : 1;
        const nextIdx = (currentIdx + dir + focusables.length) % focusables.length;
        e.preventDefault();
        focusables[nextIdx]?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen) return null;

  const current = images[index];
  if (!current) return null;

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const dx = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx > 0) goPrev();
    else goNext();
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        ref={closeBtnRef}
        type="button"
        className="lightbox-close"
        aria-label={labels.close}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ×
      </button>
      {count > 1 && (
        <>
          <button
            ref={prevBtnRef}
            type="button"
            className="lightbox-nav lightbox-nav--prev"
            aria-label={labels.prev}
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            ‹
          </button>
          <button
            ref={nextBtnRef}
            type="button"
            className="lightbox-nav lightbox-nav--next"
            aria-label={labels.next}
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            ›
          </button>
        </>
      )}
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        {current.video ? (
          <video
            key={current.video}
            src={current.video}
            poster={current.src}
            className="lightbox-video"
            controls
            autoPlay
            loop
            playsInline
            aria-label={current.alt}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={current.src} src={current.src} alt={current.alt} className="lightbox-image" />
        )}
      </figure>
      {count > 1 && (
        <div className="lightbox-counter" aria-hidden="true">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </div>
      )}
    </div>
  );
}
