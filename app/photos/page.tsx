import type { Metadata } from "next";
import { PhotoGallery } from "../components/PhotoGallery";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getPhotos } from "../../lib/photos";

export const metadata: Metadata = { title: "Photos", description: "Kieran Wang 的旅拍、广角人像与蓝调时刻摄影档案。" };
export const dynamic = "force-static";

export default function PhotosPage() {
  const photos = getPhotos();
  const empty = photos.length === 0;

  return (
    <main id="top" className="photos-page">
      <SiteHeader />
      <section className={`photos-content${empty ? " is-empty" : ""}`} aria-label="Photos">
        {empty ? (
          <p className="archive-empty">Nothing here yet.</p>
        ) : (
          <PhotoGallery photos={photos} />
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
