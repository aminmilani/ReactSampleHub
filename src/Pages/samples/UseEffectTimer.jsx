import { useEffect, useState } from "react";
import CodeBlock from "../../Components/CodeBlock";

const codeString = `function Timer() {
  const [seconds, setSeconds] = useState(0);

  if (running) {
    setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }
  return <p>Seconds passed: {seconds}</p>;
}
`;
///////without useEffect///////
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  if (running) {
    setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }
  return (
    <>
      <h3>❌ Without useEffect</h3>
      <CodeBlock
        code={`//after starting "Without useEffect" session you will need to reload the website and
//this is why "useEffect" is very important`}
      />
      <p>
        Seconds passed: {seconds}
        <button
          style={{ marginLeft: "30px" }}
          onClick={() => setRunning(!running)}
        >
          start / stop
        </button>
      </p>
    </>
  );
}

const codeString1 = `import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Seconds passed: {seconds}</p>;
}
`;
///////with useEffect///////
function Timer1() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running === false) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);
  return (
    <>
      <h3>✅ With useEffect</h3>
      <p>
        Seconds passed: {seconds}
        <button
          style={{ marginLeft: "30px" }}
          onClick={() => setRunning(!running)}
        >
          start / stop
        </button>
      </p>
    </>
  );
}

export default function UseEffectTimer() {
  return (
    <div className="sample-block">
      <section id="UseEffectTimer">
      <h2 className="sample-title">useEffect — Timer Example</h2>
      </section>
      <p className="sample-description">
        This example uses <code>useEffect</code> to set up a timer that updates
        every second. The effect runs once when the component mounts and cleans
        up when the component unmounts.
      </p>

      <div className="sample-code">
        <CodeBlock code={codeString} />
      </div>

      <div className="sample-output">
        <Timer />
      </div>

      <div className="sample-code" style={{marginTop: "15px"}}>
        <CodeBlock code={codeString1} />
      </div>

      <div className="sample-output">
        <Timer1 />
      </div>
    </div>
  );
}
