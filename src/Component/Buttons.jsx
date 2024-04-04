/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Styles from "./Buttons.module.css";

const Buttons = ({ onButtonClick }) => {
  let ButtonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];

  return (
    <>
      <div className={Styles.containerbuttons}>
        {ButtonsNames.map((ButtonsName) => (
          <button
            className={Styles.buttons}
            onClick={() => onButtonClick(ButtonsName)}
          >
            {ButtonsName}
          </button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
