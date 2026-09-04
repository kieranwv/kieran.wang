import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownArticle } from "../../components/MarkdownArticle";
import { getPostBySlug, getRenderablePosts, renderPost } from "../../../lib/posts";

export const dynamic = "force-static";
export const dynamicParams = false;

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const posts = getRenderablePosts().map((post) => ({ slug: post.slug }));
  return posts.length > 0 ? posts : [{ slug: "_" }];
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.redirect || post.draft) return {};
  return { title: post.title, description: post.description ?? post.title };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.redirect || post.draft) notFound();
  return <MarkdownArticle title={post.title} date={post.date} duration={post.duration} html={renderPost(post)} />;
}
