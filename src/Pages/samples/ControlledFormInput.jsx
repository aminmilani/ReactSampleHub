import { useState } from "react";
import CodeBlock from "../../Components/CodeBlock";

const codeString = `import { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Submitted name: \${name}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
`;

export default function ControlledFormInput() {
  return (
    <div className="sample-block">
      <section id="ControlledFormInput">
      <h2 className="sample-title">Controlled Form Input</h2>

      </section>
      <p className="sample-description">
        This example shows how to control a text input using <code>useState</code>. 
        The input value is stored in React state and updated on every keystroke.
      </p>
      <div className="sample-code">
        <CodeBlock code={codeString} />
      </div>
      <div className="sample-output">
        <ControlledInput />
      </div>
    </div>
  );
}

function ControlledInput() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
      <label>
        Name:
        <input value={name} onChange={handleChange} style={{ marginLeft: "8px" }} />
      </label>
      <button type="submit" style={{ marginLeft: "8px" }}>Submit</button>
    </form>
  );
}