import { useEffect } from "react";
import "./assets/scss/font.scss";
import "./App.css";
import Navbar from "./module/navbar/navbar";
import Character from "./module/character/character";

function App() {
  useEffect(() => {
    let height: number = document.getElementById("test")?.offsetHeight || 0;
    console.log(height);
    document.getElementById("testmargin")!.style.marginTop = height + "px";
  }, []);

  return (
    <>
      <Navbar />
      <div id="testmargin" style={{ backgroundColor: "rgba(244, 245, 247, 1)" }}>
        <Character />
      </div>
    </>
  );
}

export default App;
