import "./App.css";
// import StateEx from "./Components/StateEx";
// import LovedThisExample from "./Components/LovedThisExample";
// import CompleteArrayUpdateEx from "./Components/CompleteArrayUpdateEx";
//import TravelPlan from "./Components/TravelPlan";
// import SharingStateEx from "./Components/SharingStateEx";
// import ReducerEx from "./Components/ReducerEx";
// import Test from "./Components/test";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Samples from "./Pages/Samples";
import Contact from "./Pages/Contact";
import Dev from "./Pages/Dev";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ReactSampleHub" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/ReactSampleHub/samples" element={<Samples />} />
            <Route path="/ReactSampleHub/contact" element={<Contact />} />
            <Route path="/ReactSampleHub/dev" element={<Dev />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
