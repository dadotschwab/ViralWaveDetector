import { useState } from "react";
import "./App.css";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
