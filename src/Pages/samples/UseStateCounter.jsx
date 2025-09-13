import { useState } from "react";
import CodeBlock from "../../Components/CodeBlock";

const codeString = `import { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);
return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
}
`;

export default function UseStateCounter() {
  return (
    <div className="sample-block">
      <section id="UseStateCounter">
      <h2 className="sample-title">useState Counter</h2>
      </section>
      <p className="sample-description">
        <code>useState</code> is a built-in React Hook that allows you to add
        local state to functional components. It returns an array with the
        current state value and a function to update it. This is the most basic
        and commonly used hook in React.
      </p>
      <div className="sample-code">
        <CodeBlock code={codeString} />
      </div>
      <div className="sample-output">
        <Counter />
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: "10px" }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
