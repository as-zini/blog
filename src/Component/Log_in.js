import { useContext, useState, useSyncExternalStore } from "react"
import styled from "styled-components"
import { useCookies } from "react-cookie";
import CompleteLogin from "./CompleteLogin";
import { memberApi } from "../Api/signup";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import Home from "./Home";

export default function Login_component (){
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies();
  // const [success, setSuccess] = useState(false);
  const navigate = useNavigate()
  const isLogin = useStore((state) => state.isLogin)
  const login = useStore((state) => state.login)
  function handleIdChange(e){
    setId(e.target.value);
  }

  function handlePasswordChange(e){
    setPassword(e.target.value);
  }

  const handleClick = async () => {
    try{
      const response = await memberApi.post('dj/login/',{
        username: id,
        password: password,
      });
      console.log(response.data)
      localStorage.setItem("token", response.data.access);
      sessionStorage.setItem("token", response.data.token);
      setCookie("token", response.data.token);
      // setSuccess(true);
      login()
      console.log(isLogin);
      // navigate("/")
      return response.data;

    } catch(error){
      console.log(error)
      return error;

    }
  }

  // if(isLogin){
  //   return(
  //     <Home></Home>
  //   )

  // }

  return(
    <LoginBody>
      <LoginTitle>로그인</LoginTitle>
      <LoginInput placeholder="id" value={id} onChange={handleIdChange}></LoginInput>
      <LoginInput placeholder="password" value={password} onChange={handlePasswordChange}></LoginInput>
      <LoginButton onClick={handleClick}>로그인</LoginButton>
    </LoginBody>
  )
}


const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap: 30px;
  height:100vh;
  background-color::#070F2B;
  
`

const LoginTitle = styled.div`
  color:white;
  font-size:30px;
  font-weight:900;
`

const LoginInput = styled.input`
  width:300px;
  height:30px;
  border:none;
  border-radius:5px;
  padding:5px;
`

const LoginButton = styled.button`
  width:300px;
  height:30px;
  border:none;
  padding:5px;
  border-radius:5px;
`