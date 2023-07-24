import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import Lists from "./components/Lists";
function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Heading"} />
      <Section title="Prop Title">This is my children</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <Lists
        items={["🍵 Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      ></Lists>
    </>
  );
}

export default App;
