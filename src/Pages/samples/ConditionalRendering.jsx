import { useState } from "react";
import CodeBlock from "../../Components/CodeBlock";

const codeString = `import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This message is conditionally rendered.</p>}
    </div>
  );
}
`;

export default function ConditionalRendering() {
  return (
    <div className="sample-block">
      <section id="ConditionalRendering">
      <h2 className="sample-title">Conditional Rendering</h2>
      </section>
      <p className="sample-description">
        Conditional rendering allows components to show or hide content based on
        a condition. In this example, a message is toggled using a boolean state
        variable.
      </p>
      <div className="sample-code">
        <CodeBlock code={codeString} />
      </div>
      <div className="sample-output">
        <ToggleMessage />
      </div>
    </div>
  );
}

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This message is conditionally rendered.</p>}
    </div>
  );
}
