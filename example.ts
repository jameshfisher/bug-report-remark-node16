import { PhrasingContent, Root } from "mdast";
import remarkDirective from "remark-directive";
import { unified } from "unified";

export const parseMarkdown = (md: string): Root => {
  return unified().use(remarkDirective).parse(md);
};

export const isTextDirective = (p: PhrasingContent): boolean => {
  return p.type === "textDirective";
};
