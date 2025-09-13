import { useState } from "react";
import CodeBlock from "../../Components/CodeBlock";

const codeString = `import { useState } from "react";

function ArrayManager() {
  const [items, setItems] = useState([{ id: 1, value: "First" }]);

  const addItem = () => {
    const newItem = { id: Date.now(), value: "New Item" };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, value: "Updated!" } : item
    ));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {items.map(item => (
        <div key={item.id}>
          <span>{item.value} </span>
          <button onClick={() => updateItem(item.id)}>Update</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}`;

export default function ArrayUpdate() {
  return (
    <div className="sample-block">
      <section id="arrayUpdate">
      <h2 className="sample-title">Array Update with useState</h2>
      </section>
      <p className="sample-description">
        When working with arrays in React, you should update the state
        **immutably**. That means never modifying the original array directly.
        Instead, you use methods like <code>map</code>, <code>filter</code>, and
        the spread operator to return a new array each time.
      </p>
      <div className="sample-code">
        <CodeBlock code={codeString} />
      </div>
      <div className="sample-output">
        <ArrayManager />
      </div>
    </div>
  );
}

function ArrayManager() {
  const [items, setItems] = useState([{ id: 1, value: "First" }]);

  const addItem = () => {
    const newItem = { id: Date.now(), value: "New Item" };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, value: "Updated!" } : item
      )
    );
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={addItem}>Add Item</button>
      {items.map((item) => (
        <div key={item.id} style={{ marginTop: "5px" }}>
          <span>{item.value} </span>
          <button onClick={() => updateItem(item.id)}>Update</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
