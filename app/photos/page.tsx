import type { Metadata } from "next";
import { ComingSoon, PhotosMark } from "../components/coming-soon";

export const metadata: Metadata = { title: "Photos", description: "Kieran Wang 的旅拍、广角人像与蓝调时刻摄影档案。" };

export default function PhotosPage() {
  return <ComingSoon label="Photos" icon={<PhotosMark />} />;
}
