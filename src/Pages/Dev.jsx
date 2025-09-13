import { useState } from "react";
import "./Dev.css";

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
      // onPointerMove={(e) =>
      //   setPosition({ x: e.clientX, y: e.clientY })
      // }
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      style={{
        width: "100%",
        height: "300px",
        position: "relative",
        backgroundColor: "#111",
        color: "#fff",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      <p style={{ position: "absolute", top: 10, left: 10 }}>
        X: {position.x}, Y: {position.y}
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
      <div className="dev-page">
        <div className="sample-output">
          <PointerPositionDemo />
        </div>
      </div>
    </>
  );
}
