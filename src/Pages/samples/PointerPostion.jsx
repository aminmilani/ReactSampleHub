import { useState } from "react";
import CodeBlock from "../../Components/CodeBlock";

const codeString = `function PointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  function handleMouseDown(e) {
    if (e.button === 0) setClicked(true);
  }

  function handleMouseUp(e) {
    if (e.button === 0) setClicked(false);
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      style={{ width: "100%", height: "300px", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          transform: \`translate(\${position.x}px, \${position.y}px)\`,
          left: -10,
          top: -10,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "red",
            opacity: 0.7,
            transform: \`scale(\${clicked ? 1.5 : 1})\`,
            transition: "all 0.08s ease",
          }}
        ></div>
      </div>
    </div>
  );
}`;

function PointerPositionDemo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);



  function handleMouseDown(e) {
    if (e.button === 0) setClicked(true);
  }

  function handleMouseUp(e) {
    if (e.button === 0) setClicked(false);
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      style={{
        width: "100%", height: "300px", position: "relative", backgroundColor: "#111", color: "#fff", borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      <p style={{ position: "absolute", top: 10, left: 10 }}>
        X: {position.x.toFixed(0)}, Y: {position.y.toFixed(0)}
      </p>
      <div
        style={{
          position: "absolute",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "red",
            opacity: 0.7,
            transform: `scale(${clicked ? 1.5 : 1})`,
            transition: "all 0.08s ease",
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Dev() {
  return (
    <>
      <div className="sample-block">
            <section id="PointerPosition">
            <h2 className="sample-title">Pointer Position Example</h2>
            </section>
            <p className="sample-description">
              This sample uses <code>useState</code> and <code>onPointerMove</code> to track the mouse position and show a red dot that grows when clicked.
            </p>
            <div className="sample-code">
              <CodeBlock code={codeString} />
            </div>
            <div className="sample-output">
              <PointerPositionDemo />
            </div>
          </div>
    </>
  );
}
