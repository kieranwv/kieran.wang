import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getPhotos } from "../../lib/photos";

export const metadata: Metadata = { title: "Photos", description: "Kieran Wang 的旅拍、广角人像与蓝调时刻摄影档案。" };
export const dynamic = "force-static";

export default function PhotosPage() {
  const photos = getPhotos();

  return (
    <main id="top" className="photos-page">
      <SiteHeader />
      <section className="photos-content" aria-labelledby="photos-title">
        <header className="posts-intro">
          <h1 id="photos-title">Photos</h1>
        </header>
        {photos.length > 0 ? (
          <ul className="photo-grid">
            {photos.map((photo) => (
              <li key={photo.slug}>
                <a className="photo-frame" href={photo.src} rel="noreferrer" target="_blank">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.src} alt={photo.title} />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="archive-empty">Nothing here yet.</p>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
