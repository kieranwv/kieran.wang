import { cache } from "react";
import matter from "gray-matter";
import { marked, type Token, type Tokens } from "marked";
import { readMarkdownFile, renderInlineMarkdown, renderMarkdown } from "./markdown";

export type UseItem = {
  label: string;
  valueHtml: string;
};

export type UseSubgroup = {
  title: string;
  items: UseItem[];
};

export type UseGroup = {
  title: string;
  id: string;
  items: UseItem[];
  subgroups: UseSubgroup[];
};

export type UsesPage = {
  title: string;
  description: string;
  leadHtml: string;
  groups: UseGroup[];
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-").replace(/^-|-$/g, "") || "section";
}

function parseUseItem(text: string): UseItem {
  const match = text.trim().match(/^(?:\*\*(.+?)\*\*|(.+?)):\s*([\s\S]*)$/);
  if (!match) {
    return { label: "", valueHtml: renderInlineMarkdown(text.trim()) };
  }

  return {
    label: (match[1] || match[2] || "").trim(),
    valueHtml: renderInlineMarkdown((match[3] || "").trim()),
  };
}

function listItems(token: Tokens.List) {
  return token.items.map((item) => parseUseItem(item.text));
}

function parseUses(raw: string): UsesPage {
  const { data, content } = matter(raw);
  const tokens = marked.lexer(content);
  const groups: UseGroup[] = [];
  const lead: Token[] = [];
  let currentGroup: UseGroup | undefined;
  let currentSubgroup: UseSubgroup | undefined;

  for (const token of tokens) {
    if (token.type === "heading" && token.depth === 2) {
      currentGroup = { title: token.text, id: slugify(token.text), items: [], subgroups: [] };
      currentSubgroup = undefined;
      groups.push(currentGroup);
      continue;
    }

    if (token.type === "heading" && token.depth === 3 && currentGroup) {
      currentSubgroup = { title: token.text, items: [] };
      currentGroup.subgroups.push(currentSubgroup);
      continue;
    }

    if (token.type === "list") {
      const items = listItems(token as Tokens.List);
      if (currentSubgroup) currentSubgroup.items.push(...items);
      else if (currentGroup) currentGroup.items.push(...items);
      continue;
    }

    if (!currentGroup) lead.push(token);
  }

  return {
    title: typeof data.title === "string" ? data.title : "Uses",
    description: typeof data.description === "string" ? data.description : "",
    leadHtml: renderMarkdown(lead.map((token) => token.raw).join("").trim()),
    groups,
  };
}

export const getUses = cache(() => parseUses(readMarkdownFile("use.md")));
