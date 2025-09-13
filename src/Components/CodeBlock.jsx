import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';



export default function CodeBlock({ code }) {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={vscDarkPlus}
      customStyle={{
        background: "transparent",
        padding: "10px",
        margin: 0,
        fontSize: "0.5rem",
      }}
      codeTagProps={{ style:{background: "transparent" }}}
    >
      {code}
    </SyntaxHighlighter>
  );
}


CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};