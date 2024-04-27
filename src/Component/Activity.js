import { useState } from "react"
import "./Activity.css"
import Activity_contents from "./Activity_contents"

export default function Activity(){

  const [isHovering, setIsHovering] = useState(false);


  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }
  

  return(
    <div className="activity_body">
      <Activity_contents hover={isHovering}></Activity_contents>
      <div className="activity_list"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p>
          한국외국어대학교(서울) 멋쟁이사자처럼 12기 활동
        </p>
        {/* <p>Coming Soon</p> */}
      </div>
    </div>
  )
}