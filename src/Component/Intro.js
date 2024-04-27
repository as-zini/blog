import "./Intro.css"
import profile_img from '../images/logo_img.png'

export default function Intro () {

  return(
    <div className="intro_box">
      <div>
        <div className="img_bg"></div>
        <img className="intro_img" src={profile_img}></img>
      </div>
      <div className="intro_text">
        성장을 두려워하지 않는 개발자,<br></br>황지현입니다.
      </div>
    </div>
  )
}