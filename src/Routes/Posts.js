import "./Posts.css"
import profile_img from "../images/logo_img.png"
import heart_icon from "../images/heart_icon.png"
import { memberApi } from "../Api/signup";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { sync } from "framer-motion";

function DeleteButton(id){
  const handleDelete = async(id) => {
    const token = localStorage.getItem("token")
    try{
      const response = await memberApi.DELETE(`/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      return
    } catch(error){
      console.log(error)
      console.log(id)
      return error;
    }}
  return(
    <Delete onClick={handleDelete}>
      Delete
    </Delete>
  )
}

const Delete = styled.button`
  border:none;
  background:none;
  color:#FFEEF4;
  font-weight:900;
  `

export default function Posts (){
  const [post, setPost] = useState([])

  const handleDelete = async() => {
    const token = localStorage.getItem("token")
    try{
      const response = await memberApi.get(`/blog/$`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      return
    } catch(error){
      console.log(error)
      return error;
    }
  }

  const getPosts = async () => {
    const token = localStorage.getItem("token")
    try{
      const response = await memberApi.get('/blog/', {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      console.log(response.data)
      // localStorage.setItem("token", response.data.token);
      // sessionStorage.setItem("token", response.data.token);
      const data = response.data
      setPost(data)
      console.log(post)
      return
      // response.data;
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
        {/* <a id="login" href="../Component/Log_in.js">로그인</a> */}
      </header>
      <img className="blog_img" src={profile_img}></img>
      <div className="posts_buttons">
        <button className="posted_button" onClick={getPosts}>포스트</button>
        {/* <button className="temporary_saved_button">임시 저장된 글</button> */}
      </div>
      <div className="view_contents">
        <PostsBody>
          {
            post.map((el) => {
              return(
                <PostBody>
                  <PostTitle>title: {el.title}</PostTitle>
                  <PostContents>{el.body}</PostContents>
                  <ButtonBox>
                    <DeleteButton id = {el.id}></DeleteButton>
                    <EditButton>Edit</EditButton>
                  </ButtonBox>
                </PostBody>
              )
            })
          }
        </PostsBody>
      </div>
    </div>
  )
}

const PostsBody = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:900px;
  gap: 30px;
  position: absolute;
  top:350px;
  left: 400px;
  background-color:#070f2b;
`

const PostBody = styled.div`
  width: 150px;
  height: 120px;

`

const PostTitle = styled.div`
  color:white;
  font-weight:900;
  font-size:20px;
`

const PostContents = styled.div`
  color:white;

`

const ButtonBox = styled.div`
  display:flex;
  flex-direction: flex-end;
  margin: 20px 0;
`

// const DeleteButton = styled.button`
//   color:white;
//   border:none;
//   background:none;
//   font-weight: 800;
//   margin: 40px 0;
// `

const EditButton = styled.button`
  color:#FFEEF4;;
  border:none;
  background:none;
  font-weight: 800;

`
