import React from "react";

import classes from "./Results.module.css";

const Results = (props) => {
  return (
    <div className={classes["results__container2"]}>
      <h1>
        <span style={{ color: "hsl(259, 100%, 65%)" }}>
          {!props.propsEmpty ? props.age.ageYear : "- -"}
        </span>
        &nbsp;years
      </h1>
      <h1>
        <span style={{ color: "hsl(259, 100%, 65%)" }}>
          {!props.propsEmpty ? props.age.ageMonth : "- -"}
        </span>
        &nbsp;months
      </h1>
    </div>
  );
};

export default Results;

{
}
