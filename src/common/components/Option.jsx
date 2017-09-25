import React from "react";
import cls from "./Option.css";

function Option(props) {
  const { label, status } = props;
  return (
    <div>
      <span className={cls.label}>{ label }</span>
      <span className={cls.status}> { status }</span>
    </div>
  );
}

export default Option;
