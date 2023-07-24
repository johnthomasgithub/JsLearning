import { ReactNode } from "react";

type counterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};
const Counter = ({ setCount, children }: counterProps) => {
  return (
    <>
      {children}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
