/* eslint-disable react/prop-types */
import Styles from "./Display.module.css";
const Display = ({ display }) => {
  return (
    <>
      <div>
        <input
          className={Styles.display}
          type="text"
          id="display"
          value={display}
          readOnly
        />
      </div>
    </>
  );
};

export default Display;
