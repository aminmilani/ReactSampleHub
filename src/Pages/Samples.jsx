import "./Samples.css";
import ArrayUpdate from "./samples/ArrayUpdate";
import ConditionalRendering from "./samples/ConditionalRendering";
import ControlledFormInput from "./samples/ControlledFormInput";
import ListRenderingExample from "./samples/ListRenderingExample";
import UseEffectTimer from "./samples/UseEffectTimer";
import UseStateCounter from "./samples/UseStateCounter";
import Sidebar from "../Components/Sidebar";
import PointerPosition from "./samples/PointerPostion";

export default function Samples() {
  return (
    <div className="samples-page">
      <Sidebar />
      <div className="samples-content">
        <h1 className="samples-title">React Sample Collection</h1>
        <p className="samples-intro">
          Below are interactive examples demonstrating common React concepts.
          Each sample includes the code and its rendered output.
        </p>

        {/* Sample 1: useState Counter */}
        <UseStateCounter />
        {/* Sample 2: useState ArrayUpdate */}
        <ArrayUpdate />
        {/* Sample 3: Controlled Form */}
        <ControlledFormInput />
        {/* Sample 4: Conditional Rendering */}
        <ConditionalRendering />
        {/* Sample 5: List Rendering */}
        <ListRenderingExample />
        {/* Sample 6: useEffect Timer */}
        <UseEffectTimer />
        {/* Sample 7: Pointer Position */}
        <PointerPosition />
      </div>
    </div>
  );
}
