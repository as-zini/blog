import { useContext, useState } from "react"
import "./Header.css"
import { AppContext } from "../App.js";
import { AuthContext } from "../store/authContext";
import useStore from "../store/store";
import { memberApi } from "../Api/signup";

export default function Header ({setIsPosting}) {
  // const {isLogin, setIsLogin} = useContext(AuthContext);
  const isLogin = useStore((state) => state.isLogin)
  const login = useStore((state) => state.login)

  // const handleClick = async () => {
  //   try{
  //     const response = await memberApi.post('dj/logout/',{
  //     },{
  //       headers:{
  //         Authorization: `Bearer ${Access_token}`
  //       }
  //     });
  //     console.log(response.data)
  //     localStorage.setItem("token", response.data.token);
  //     sessionStorage.setItem("token", response.data.token);
  //     setCookie("token", response.data.token);
  //     // setSuccess(true);
  //     login()
  //     console.log(isLogin);
  //     // navigate("/")
  //     return response.data;

  //   } catch(error){
  //     console.log(error)
  //     return error;

  //   }
  // }
  function handleClick(){
    setIsPosting(true)
  }

  function handleLogOut(){
    login()
    console.log(isLogin)
  }

  
  return(
    <div className="header_body">
      {/* <div className="logo">
        <a  href="../App.js">
          <div className=""></div>
        </a>
      </div> */}
      <div className="sign_up_body">
        {isLogin ? <></> :<a id="sign_up" href="./Sign-up">Sign up</a>}
        {isLogin ? <button className="log-out" onClick={handleLogOut}>Log Out</button> :<a id="log_in" href="./">Log in</a>}
      </div>
      <div className="hyperlink">
        {/* {isLogin ? <a id="home" href="../Home" >Home</a> : <></>} */}
        {isLogin ? <button id="posting" onClick={handleClick}>Posting</button>: <></>}
        {/* {isLogin ? <a id="activity" href="./Posts">View Posts</a> : <></>} */}
        {/* <a id="project" href="javascript:void(0)">Project</a> */}
      </div>
    </div>
  )
}