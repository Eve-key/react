import { useEffect, useRef } from "react";
import "./styles.css";
import User from "./UserComponent";

export default function App() {
  return (
    <div className="App">
      <User text="シャロ" />
    </div>
  );
}
