import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import Navbar from './component/Navbar'
import {  Routes, Route, Link } from "react-router-dom";
import TradingAutomation from './component/TradingAutomation';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div style={{ marginTop: "75px" }}>
        <TradingAutomation />
      </div>
    </>
  )
}

export default App