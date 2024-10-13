import { useState, ReactElement } from "react";

interface MyComponentProps {
  message: string;
}

const MyComponent = ({ message }: MyComponentProps): ReactElement => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{message}</h1>
      <p>文章</p>
      <p>Current Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MyComponent;
