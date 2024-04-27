import "./Header.css"

export default function Header () {
  
  return(
    <div className="header_body">
      <div className="logo">
        <a  href="../App.js">
          <div className=""></div>
        </a>
      </div>
      <div className="hyperlink">
        <a id="home" href="../App.js" >Home</a>
        <a id="profile" href="./Profile.js">Profile</a>
        <a id="activity" href="./Activity.js">Activity</a>
        <a id="project" href="javascript:void(0)">Project</a>
      </div>
    </div>
  )
}