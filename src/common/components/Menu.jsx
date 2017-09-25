import React from "react";

import Option from "../components/Option";

import cls from "./Menu.css";

function Menu(props) {
  const options = props.options.map((option, index) =>
    (<Option
      key={index}
      label={option.mode}
      status={(option.response.length) ? "Disrupted" : "OK"}
    />));
  return (
    <div className={cls.container}>
      {options}
    </div>
  );
}

export default Menu;
