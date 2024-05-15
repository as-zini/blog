import "./Posts.css"
import profile_img from "../images/logo_img.png"
import heart_icon from "../images/heart_icon.png"

export default function Posts (){

  return(
    <div className="posts_body">
      <h1 className="blog_title">aszini-log</h1>
      <img className="blog_img" src={profile_img}></img>
      <div className="posts_buttons">
        <button className="posted_button">포스트</button>
        <button className="temporary_saved_button">임시 저장된 글</button>
      </div>
      <div className="view_posts">
        <div className="post_summary">
          <p className="post_title">멋사 12기 활동</p>
          <p className="post_contents">...</p>
        </div>
        <div className="post_information">
          <p className="posted_date">2일 전</p>
          <p className="comment">댓글 3</p>
          <div className="heart">
            <img className="heart_img" src={heart_icon}></img>
            <p className="heart_number">999+</p>
          </div>
        </div>
      </div>
    </div>
  )
}