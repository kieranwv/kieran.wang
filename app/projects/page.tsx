import type { Metadata } from "next";
import { ComingSoon, ProjectsMark } from "../components/coming-soon";

export const metadata: Metadata = { title: "Projects", description: "Kieran Wang 的产品、前端与开源项目。" };

export default function ProjectsPage() {
  return <ComingSoon label="Projects" icon={<ProjectsMark />} />;
}
