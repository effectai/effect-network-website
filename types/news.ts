import type { MarkdownParsedContent } from "@nuxt/content/types";

export interface News extends MarkdownParsedContent {
  title: string;
  description: string;
  image: {
    src: string;
    alt?: string;
  };

  author: string;
  type: string;
  created: string;
  published: boolean;

  featured?: boolean;
}
