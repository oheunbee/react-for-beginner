// //import Button from "./Button";
// //import styles from "./App.module.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   useEffect(() => {
//     console.log("i run only once.");
//   }, []);
//  // useEffect : 코드가 딱 한번만 실행될 수 있도록 보호함 (dependency 가 비어있다면.)
//   useEffect(() => {
//     console.log("i run when 'keyword' change");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("i run when 'counter' change");
//   }, [counter]);
//   useEffect(() => {
//     console.log("i run when keyword & counter change");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";

function Hello() {
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return <div>
    {showing ? <Hello /> : null} 
    <button onClick={onClick}>{showing ? "hide" : "show"}</button>
  </div>;
}

export default App;