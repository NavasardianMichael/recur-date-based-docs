declare module "react-syntax-highlighter" {
  import { ComponentType } from "react";
  export const Prism: ComponentType<{
    language?: string;
    style?: Record<string, unknown>;
    customStyle?: Record<string, unknown>;
    codeTagProps?: { className?: string };
    showLineNumbers?: boolean;
    wrapLongLines?: boolean;
    children?: string;
  }>;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const oneLight: Record<string, unknown>;
}
