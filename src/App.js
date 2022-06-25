import React from "react";
import Navbar from "./Containers/Navbar";
import Landing from "./Pages/Landing";
// import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}
