import "./Posting.css"

export default function Posting(){
  return(
    <div className="posting_body">
      <div className="posting_box">
        <input className="posting_title" placeholder="제목을 입력하세요."></input>
        {/* <input className="text_area" placeholder="내용을 입력하세요."></input> */}
        <textarea placeholder="내용을 입력하세요."></textarea>
        <div className="filebox">
          <input class="upload-name" value="첨부파일" placeholder="첨부파일"></input>
          <label for="file">파일찾기</label> 
          <input type="file" id="file"></input>
        </div>
      </div>
      <div className="post_buttons">
        
        <button className="temporary_button">임시 저장</button>
        <button className="post_button">글쓰기</button>
      </div>
    </div>
  )
}