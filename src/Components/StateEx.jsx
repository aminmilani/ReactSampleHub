import { useState } from "react";
import { sculptureList } from "../data";

export default function StateEx() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let sculpture = sculptureList[index];

  function handleShowNext() {
    if (index === sculptureList.length - 1) {
      setIndex(0);
    } else setIndex(index + 1);
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="container">
      <button onClick={handleShowNext}>Next</button>
      <h2>
        {" "}
        {sculpture.name} by {sculpture.artist}{" "}
      </h2>
      <h3>
        {" "}
        ({index + 1} of {sculptureList.length}){" "}
      </h3>{" "}
      {/*(x of 12)*/}
      <button onClick={handleShowMore}>
        {showMore ? "Less" : "More"} details
      </button>
      <br />
      {showMore && <p> {sculpture.description} </p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
