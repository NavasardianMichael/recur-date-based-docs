import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./styles.module.css";

type Props = {
  language?: string;
  children: string;
};

export const InlineCode: FC<Props> = ({ language = "typescript", children }) => {
  return (
    <span className={styles.inlineCode}>
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        customStyle={{
          display: "inline",
          margin: 0,
          padding: "0.2em 0.4em",
          background: "transparent",
          fontSize: "inherit",
        }}
        showLineNumbers={false}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </span>
  );
};
