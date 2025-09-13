import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("#");

  const links = [
    { id: "#UseStateCounter", label: "useState Counter" },
    { id: "#arrayUpdate", label: "Array Update" },
    { id: "#ControlledFormInput", label: "Controlled Form Input" },
    { id: "#ConditionalRendering", label: "ConditionalRendering" },
    { id: "#ListRenderingExample", label: "ListRenderingExample" },
    { id: "#UseEffectTimer", label: "UseEffectTimer" },
    { id: "#PointerPosition", label: "Pointer Position Example"}
  ];

  return (
    <div className="sidebar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.id}
              className={active === link.id ? "active" : ""}
              onClick={() => setActive(link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
