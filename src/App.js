import React from "react";
import "./style.css";

export default function App() {
  return (
    function Welcome(props){
      return <h1>Hello, {props.name}</h1>;
    }

    export default function App(props) {
      return (
    <div>
      <Welcome name="Mao"/>
      <Welcome name="Caxollo"/>
      <Welcome name="Krinhi"/>
    </div>
      );
    }
export default App;