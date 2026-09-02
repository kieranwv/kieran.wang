import type { Metadata } from "next";
import { ComingSoon, PostsMark } from "../components/coming-soon";

export const metadata: Metadata = { title: "Posts", description: "Kieran Wang 的技术文章、实践记录与开发笔记。" };

export default function PostsPage() {
  return <ComingSoon label="Posts" icon={<PostsMark />} />;
}
