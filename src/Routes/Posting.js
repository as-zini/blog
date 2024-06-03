import { useState } from "react"
import "./Posting.css"
import { memberApi } from "../Api/signup";
import { useCookies } from "react-cookie";

export default function Posting(){
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies();
  
  function handleTitleChange(e){
    console.log(title);
    setTitle(e.target.value);
  }

  function handleContentsChange(e){
    console.log(contents);
    setContents(e.target.value);
  }

  const handleClick = async () => {
    try{
      const response = await memberApi.post('/blog/',{
        "title" : title,
        "body" : contents
      },{headers:{
        Authorization: "Bearer {Access_token}"
      }});
      console.log(response.data)
      localStorage.setItem("token", response.data.token);
      sessionStorage.setItem("token", response.data.token);
      setCookie("token", response.data.token);
      return response.data;
    } catch(error){
      console.log(error)
      return error;
    }
  }

  return(
    <div className="posting_body">
      <div className="posting_box">
        <input className="posting_title" placeholder="제목을 입력하세요."
          value={title} onChange={handleTitleChange}></input>
        {/* <input className="text_area" placeholder="내용을 입력하세요."></input> */}
        <textarea placeholder="내용을 입력하세요." value={contents} onChange={handleContentsChange}></textarea>
        <div className="filebox">
          <input class="upload-name" value="첨부파일" placeholder="첨부파일"></input>
          <label for="file">파일찾기</label> 
          <input type="file" id="file"></input>
        </div>
      </div>
      <div className="post_buttons">
        
        <button className="temporary_button">임시 저장</button>
        <button className="post_button" onClick={handleClick}>글쓰기</button>
      </div>
    </div>
  )
}