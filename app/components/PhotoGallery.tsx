"use client";

import { useEffect, useRef, useState } from "react";
import type { Photo } from "../../lib/photos";

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dismissRef = useRef<HTMLButtonElement>(null);
  const current = index === null ? null : photos[index];

  useEffect(() => {
    if (index === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIndex(null);
        event.preventDefault();
      }
      if (event.key === "ArrowRight" && index < photos.length - 1) {
        setIndex(index + 1);
        event.preventDefault();
      }
      if (event.key === "ArrowLeft" && index > 0) {
        setIndex(index - 1);
        event.preventDefault();
      }
    };

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    dismissRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
      window.removeEventListener("keydown", onKey);
    };
  }, [index, photos.length]);

  return (
    <>
      <ul className="photo-grid">
        {photos.map((photo, photoIndex) => (
          <li key={photo.slug}>
            <button type="button" className="photo-frame" onClick={() => setIndex(photoIndex)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt="" />
            </button>
          </li>
        ))}
      </ul>
      {current ? (
        <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label="Photo">
          <button
            type="button"
            className="photo-lightbox-dismiss"
            aria-label="Close photo"
            onClick={() => setIndex(null)}
            ref={dismissRef}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={current.src} alt="" />
        </div>
      ) : null}
    </>
  );
}
