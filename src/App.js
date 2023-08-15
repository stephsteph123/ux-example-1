import React from "react";
import NewButton from "./components/NewButton";
import Button from "./components/Button";
import TextField from "./components/TextField";
import CancelButton from "./components/CancelButton";

function App() {
  return (
    <div>
      <Button/>
      <TextField handleClick={() => console.log("hello")}/>
    </div>
  );
}

export default App;
