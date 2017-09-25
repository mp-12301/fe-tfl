import React from "react";
import cls from "./Location.css";

function Location(props) {
  const { latitude, longitude } = props;
  return (
    <div>
      <span className={cls.text}>Location: </span>
      <span className={cls.location}>{latitude}, {longitude}</span>
    </div>
  );
}

export default Location;
