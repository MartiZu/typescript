import Counter from "./Counter";

function App() {
  return (
    <>
      <Counter>{(num: number) => <>The count is: {num}</>}</Counter>
    </>
  );
}

export default App;
