import "./Posts.css"
import profile_img from "../images/logo_img.png"
import heart_icon from "../images/heart_icon.png"
import { memberApi } from "../Api/signup";
import { useEffect, useState } from "react";

export default function Posts (){
  const [post, setPost] = useState({})

  const getPosts = async () => {
    try{
      const response = await memberApi.get('/blog/');
      console.log(response.data[0])
      setPost(response.data)
      // localStorage.setItem("token", response.data.token);
      // sessionStorage.setItem("token", response.data.token);
      return response.data;
    } catch(error){
      console.log(error)
      return error;
    }
  }

  useEffect(() => {
    getPosts()
  },[])

  return(
    <div className="posts_body">
      <header>
        <h1 className="blog_title">aszini-log</h1>
        <a id="login" href="../Component/Log_in.js">로그인</a>
      </header>
      <img className="blog_img" src={profile_img}></img>
      <div className="posts_buttons">
        <button className="posted_button">포스트</button>
        <button className="temporary_saved_button">임시 저장된 글</button>
      </div>
      <div className="view_contents">
        <div className="first">
          {/* <h1>{post[0].title}</h1> */}
          {/* <div>{post[0].body}</div> */}
        </div>
      </div>
    </div>
  )
}