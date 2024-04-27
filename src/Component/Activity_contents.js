import "./Activity_contents.css"
import first_activity_img from "../images/first_activity_img.png"

export default function Activity_contents(props){
  
  return(
    <div>
      <div className={props.hover ? "contents_section_active" : "contents_section"}>
        <img className="first_activity_img" src={first_activity_img}></img>
      </div>
    </div>
  )
}