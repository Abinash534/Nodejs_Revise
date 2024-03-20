import React from "react";
import Navbar from "./components/navbar";
import TodoMain from "./components/TodoMain";
import TodoContext from "./context/TodoContext";

function App() {
  return (
    <>
      <TodoContext>
        <Navbar />
        <TodoMain />
      </TodoContext>
    </>
  );
}

export default App;
