// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Styles from "./App.module.css";
import Buttons from "./Component/Buttons";
import Display from "./Component/Display";

function App() {
  const [cal, setCal] = useState("");
  const onButtonClick = (buttontext) => {
    if (buttontext === "C") {
      setCal("");
    } else if (buttontext === "=") {
      const result = eval(cal);
      setCal(result);
    } else {
      const newDisplay = cal + buttontext;
      setCal(newDisplay);
    }
  };
  return (
    <>
      <h1 className={Styles.Head}>Calculator</h1>

      <div className={Styles.calculator}>
        <Display display={cal}></Display>
        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>
    </>
  );
}

export default App;
