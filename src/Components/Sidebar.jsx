import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("#");

  const links = [
    { id: "#UseStateCounter", lable: "useState Counter" },
    { id: "#arrayUpdate", lable: "Array Update" },
    { id: "#ControlledFormInput", lable: "Controlled Form Input" },
    { id: "#ConditionalRendering", lable: "ConditionalRendering" },
    { id: "#ListRenderingExample", lable: "ListRenderingExample" },
    { id: "#UseEffectTimer", lable: "UseEffectTimer" },
    { id: "#PointerPosition", lable: "Pointer Position Example"}
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
              {link.lable}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
