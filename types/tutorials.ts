import type { MarkdownParsedContent } from "@nuxt/content/types";

export interface Tutorial extends MarkdownParsedContent {
  title: string;
  author: string;
  lastUpdated: string;
  disabled: boolean;
}
