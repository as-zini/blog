import { useContext, useState } from "react"
import "./Header.css"
import { AppContext } from "../App.js";

export default function Header () {

  const mode = useContext(AppContext);
  
  return(
    <div className="header_body">
      {/* <div className="logo">
        <a  href="../App.js">
          <div className=""></div>
        </a>
      </div> */}
      <div className="sign_up_body">
        <a id="sign_up" href="./Sign-up">Sign up</a>
        <a id="log_in" href="./Log-in">Log in</a>
      </div>
      <div className="hyperlink">
        <a id="home" href="../Home" >Home</a>
        <a id="profile" href="./Posting">Posting</a>
        <a id="activity" href="./Posts">View Posts</a>
        {/* <a id="project" href="javascript:void(0)">Project</a> */}
        {mode.darkMode}
      </div>
    </div>
  )
}