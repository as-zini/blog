import "./Strength.css";
import Strength_contents from "./Strength_contents";
import React from "react";


export default function Strength () {

  return(
    <div className="strength_body">
      <div id="title_section">
        <div id="title">My Strength</div>
        <div id="title_contents"><p>지금처럼, 언제나</p><p style={{"color":"white"}}>개발을 즐길 수 있는</p><p> 개발자가 되고싶습니다</p></div>
      </div>
      <Strength_contents></Strength_contents>
    </div>
  )
}