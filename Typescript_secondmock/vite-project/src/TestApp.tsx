import {
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
    MouseEvent,
    KeyboardEvent,
  } from "react";
  
  interface User {
    id: number;
    username: string;
  }
  
  type fibFunction = (n: number) => number;
  
  const fib: fibFunction = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  };
  
  const myNum: number = 17;
  
  function App() {
    const [count, setCount] = useState<number>(0);
    const [users, setUsers] = useState<User[] | null>([]);
  
    const inputRef = useRef<HTMLInputElement>(null);
  
    console.log(inputRef?.current);
    console.log(inputRef?.current?.value);
  
    useEffect(() => {
      console.log("mounting");
      console.log("users: ", users);
      return () => console.log("unmounting");
    }, [users]);
  
    //like useEffect there is a dependency arr, anything that the function it depends on
    const addTwo = useCallback(
      (
        e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
      ): void => setCount((prev) => prev + 2),
      []
    );
  
    const result = useMemo<number>(() => fib(myNum), [myNum]);
  
    return (
      <>
        <h1>{count}</h1>
        <button onClick={addTwo}>+</button>
        <h2>{result}</h2>
        <input type="text" ref={inputRef} />
      </>
    );
  }
  
  export default App;
  