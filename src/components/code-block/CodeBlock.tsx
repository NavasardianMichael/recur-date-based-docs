import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./styles.module.css";

type Props = {
  language: string;
  children: string;
};

export const CodeBlock: FC<Props> = ({ language, children }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneLight}
      customStyle={{ margin: 0, padding: 0, background: "transparent" }}
      codeTagProps={{ className: styles.code }}
      showLineNumbers={false}
      wrapLongLines
    >
      {children.trim()}
    </SyntaxHighlighter>
  );
};
