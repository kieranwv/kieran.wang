import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownArticle } from "../../components/MarkdownArticle";
import { getRenderableTalks, getTalkBySlug, renderTalk } from "../../../lib/talks";

export const dynamic = "force-static";
export const dynamicParams = false;

type TalkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const talks = getRenderableTalks().map((talk) => ({ slug: talk.slug }));
  return talks.length > 0 ? talks : [{ slug: "_" }];
}

export async function generateMetadata({ params }: TalkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);
  if (!talk || talk.redirect || talk.draft) return {};
  return { title: talk.title, description: talk.description ?? talk.title };
}

export default async function TalkPage({ params }: TalkPageProps) {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);
  if (!talk || talk.redirect || talk.draft) notFound();
  return <MarkdownArticle title={talk.title} date={talk.date} duration={talk.duration} html={renderTalk(talk)} />;
}
