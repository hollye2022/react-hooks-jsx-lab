import React from "react";
import { name, city } from "../data/data.js";


function Home() {
  const color={color:"firebrick"}
  // update the JSX being returned!
  return (

  <div id = "home">
    <h1 style={color} >{name} is a Web Developer from {city}</h1>

  </div>
  )
}

export default Home;
