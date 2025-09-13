import CodeBlock from "../../Components/CodeBlock";

const codeString = `const fruits = ["Apple", "Banana", "Orange"];

export default function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}`;

const fruits = ["Apple", "Banana", "Orange"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default function ListRenderingExample() {
  return (
    <div className="sample-block">
      <section id="ListRenderingExample">
      <h2 className="sample-title">List Rendering — .map() with key</h2>
      </section>
      <p className="sample-description">
        This example demonstrates how to render a list from an array using{" "}
        <code>.map()</code>. Each list item requires a unique <code>key</code>{" "}
        prop to help React identify which items have changed, added, or removed.
      </p>
      <div className="sample-code">
        <CodeBlock code={codeString} />
      </div>
      <div className="sample-output">
        <FruitList />
      </div>
    </div>
  );
}
