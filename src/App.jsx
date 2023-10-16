import { useState } from "react";
import "./App.css";
import MultiStepForm from "./components/MultistepForm/MultistepForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MultiStepForm />
    </>
  );
}

export default App;
