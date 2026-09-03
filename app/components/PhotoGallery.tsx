"use client";

import { useEffect, useState } from "react";
import type { Photo } from "../../lib/photos";

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
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
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
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
        <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label="Photo" onClick={() => setIndex(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={current.src} alt="" />
        </div>
      ) : null}
    </>
  );
}
