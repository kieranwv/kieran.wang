import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = { title: "Blog", description: "Kieran Wang 的技术文章、实践记录与开发笔记。" };
export const dynamic = "force-static";

const JUEJIN_USER_ID = "1141722285880972";
const JUEJIN_PROFILE_URL = `https://juejin.cn/user/${JUEJIN_USER_ID}/posts`;
const JUEJIN_ARTICLES_API = "https://api.juejin.cn/content_api/v1/article/query_list?aid=2608&uuid=0";

type JuejinPost = {
  article_id: string;
  article_info: {
    title: string;
    ctime: string;
  };
};

type JuejinResponse = {
  err_no: number;
  data: JuejinPost[];
  cursor: string;
  has_more: boolean;
};

async function getJuejinPosts() {
  const posts: JuejinPost[] = [];
  let cursor = "0";

  try {
    for (let page = 0; page < 5; page += 1) {
      const response = await fetch(JUEJIN_ARTICLES_API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ user_id: JUEJIN_USER_ID, sort_type: 2, cursor }),
        signal: AbortSignal.timeout(8_000),
      });

      if (!response.ok) throw new Error(`Juejin returned ${response.status}`);
      const result = (await response.json()) as JuejinResponse;
      if (result.err_no !== 0 || !Array.isArray(result.data)) throw new Error("Invalid Juejin response");

      posts.push(...result.data);
      if (!result.has_more || !result.cursor) break;
      cursor = result.cursor;
    }
  } catch (error) {
    console.warn("Unable to fetch Juejin posts during build", error);
  }

  return posts;
}

function formatDate(timestamp: string) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Shanghai",
  }).format(Number(timestamp) * 1000).replaceAll("-", ".");
}

export default async function PostsPage() {
  const posts = await getJuejinPosts();

  return (
    <main id="top" className="posts-page">
      <SiteHeader />

      <section className="posts-content page-width" aria-labelledby="posts-title">
        <header className="posts-intro">
          <h1 id="posts-title">Blog</h1>
          <a className="text-link" href={JUEJIN_PROFILE_URL} rel="noreferrer" target="_blank">掘金 <span aria-hidden="true">↗</span></a>
        </header>

        {posts.length > 0 ? (
          <ol className="post-list">
            {posts.map((post) => (
              <li key={post.article_id}>
                <a href={`https://juejin.cn/post/${post.article_id}`} rel="noreferrer" target="_blank">
                  <h2>{post.article_info.title}</h2>
                  <time dateTime={new Date(Number(post.article_info.ctime) * 1000).toISOString()}>{formatDate(post.article_info.ctime)}</time>
                  <span className="post-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ol>
        ) : (
          <div className="posts-empty">
            <p>文章列表暂时没有同步成功。</p>
            <a className="text-link" href={JUEJIN_PROFILE_URL} rel="noreferrer" target="_blank">前往掘金阅读 <span aria-hidden="true">↗</span></a>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
