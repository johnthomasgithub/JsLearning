import { ReactNode } from "react";

interface ListProps<T> {
  items: string[];
  render: (item: T | string) => ReactNode;
}

const Lists = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{render(item)}</li>;
      })}
    </ul>
  );
};

export default Lists;
