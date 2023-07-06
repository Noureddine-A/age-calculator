import { useState, useEffect, useRef } from "react";
import classes from "./App.module.css";

import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [age, setAge] = useState();

  const ref = useRef(true);
  const firstRender = ref.current;
  ref.current=false;

  const ageSet = (nb) => {
    setAge(nb);
  }

  return (
    <div className={classes["main__container"]}>
      <div className={classes["calculator__container"]}>
        <Form onSettingDay={ageSet}/>
        <Results age={age} propsEmpty={firstRender}/>
      </div>
    </div>
  );
}

export default App;
