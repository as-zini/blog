import { useEffect, useState } from "react";
import "./Favorite.css"

export default function Favorite(){
  const [movie1, setMovie1] = useState(null);
  const [movie2, setMovie2] = useState(null);
  const [movie3, setMovie3] = useState(null);

  const get_First_Movie_Data = async() => {
    const response = await fetch("http://www.omdbapi.com?apikey=7035c60c&s=your_name");
    const {Search} = await response.json();
    setMovie1(Search);
  }

  const get_Second_Movie_Data = async() => {
    const response = await fetch("http://www.omdbapi.com?apikey=7035c60c&s=Howl's_Moving_Castle");
    const {Search} = await response.json();
    setMovie2(Search);
    }

  const get_Third_Movie_Data = async() => {
    const response = await fetch("http://www.omdbapi.com?apikey=7035c60c&s=the_intern")
    const {Search} = await response.json();
    setMovie3(Search);
  }
  
  useEffect(() => {
    get_First_Movie_Data()
    get_Second_Movie_Data()
    get_Third_Movie_Data()
  },[]);
  
  if(!movie1){
    return(
      <div className="Loading">Loading...</div>
    )
  }

  if(!movie2){
    return(
      <div className="Loading">Loading...</div>
    )
  }
  
  if(!movie3){
    return(
      <div className="Loading">Loading...</div>
    )
  }
  
  return(
    <div className="movie_body">
      <h1>My Favorite Movie</h1>
      <div className="movie_contents">
        <div className="movie">
          <div className="movie_title">#<br></br>너의 이름은</div>
          <img src={movie1[0].Poster}></img>
        </div>
        <div className="movie">
          <div className="movie_title">#<br></br>하울의 움직이는 성</div>
          <img src={movie2[0].Poster}></img>
        </div>
        <div className="movie">
          <div className="movie_title">#<br></br>인턴</div>
          <img src={movie3[0].Poster}></img>
        </div>
      </div>
    </div>
  )
}
