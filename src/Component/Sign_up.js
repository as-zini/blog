import { useState } from "react";
import { styled } from "styled-components";
import { useCookies } from "react-cookie";
import axios from "axios";
import { memberApi } from "../Api/signup";

export default function Sign_up () {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [nickname, setNickname] = useState('');
  const [university, setUniversity] = useState('');
  const [location, setLocation] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isData, setIsData] = useState(false);

  function handleIdChange(e){
    setId(e.target.value);
  }
  
  function handlePasswordChange(e){
    setPassword(e.target.value);
  }
  function handlePassword2Change(e){
    setPassword2(e.target.value);
  }
  function handleNickNameChange(e){
    setNickname(e.target.value);
  }
  function handleUniversityChange(e){
    setUniversity(e.target.value);
  }
  function handleLocationChange(e){
    setLocation(e.target.value);
  }

  const handleClick = async () => {
    try{
      const response = await memberApi.post('/dj/registration/',{
        "username": id,
        "password1": password,
        "password2": password2,
        "nickname": nickname,
        "university": university,
        "location": location
      });
      console.log(response.data)
      // localStorage.setItem("token", response.data.token);
      // sessionStorage.setItem("token", response.data.token);
      // setCookie("token", response.data.token);
      setIsData(true);
      return response.data;
    } catch(error){
      console.log(error)
      return error;
    }

    
  }
  if (isData){
    return(
      <>
      <CompleteBody>
        <Complete>회원가입이 완료되었습니다!🥳</Complete>
        <BackHome href="../Home">홈으로 돌아가기</BackHome>
      </CompleteBody>
      </>
    )
  }
  

  return(
      <SignUpBody>
        <SignUpTitle>
          <div style={{"color":"white","font-weight":"900", "font-size":"36px"}}>회원가입</div>
          <div style={{"color":"white", "font-weight":"700"}}>회원가입하고 블로그의 다양한 기능을 사용해보세요!</div>
        </SignUpTitle>
        <SignUpBox>
          <UserName placeholder="id를 입력하세요" value={id} onChange={handleIdChange}></UserName>
          <Password placeholder="비밀번호를 입력하세요" value={password} onChange={handlePasswordChange}></Password>
          <PasswordConfirm placeholder="동일한 비밀번호를 다시 입력하세요" value={password2} onChange={handlePassword2Change}></PasswordConfirm>
          <NickName placeholder="닉네임을 입력하세요" value={nickname} onChange={handleNickNameChange}></NickName>
          <University placeholder="소속 대학교를 입력하세요" value={university} onChange={handleUniversityChange}></University>
          <Location placeholder="소속 대학교의 지역을 입력하세요" value={location} onChange={handleLocationChange}></Location>
          <SignUpButton onClick={handleClick}>가입하기</SignUpButton>
          <GoLogIn>이미 회원이신가요?<a href="/Log-in">로그인 페이지로 이동</a></GoLogIn>
        </SignUpBox>
      </SignUpBody>
  )
}

const SignUpBody = styled.div`
  position:relative;
  background-color:#070F2B;
  height:790px;
`

const SignUpTitle = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:30vh;
  gap:10px;
  margin-bottom:-50px;

`


const SignUpBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  // height:vh;
  gap:20px;

  input {
    width:390px;
    height:45px;
    border: none;
    border-radius:10px;
    padding:5px;
  }

  button{
    width:160px;
    height:50px;
    margin:5px 0;
    border-radius:10px;
    border:none;
    font-weight:700;
  }
  button:hover{
    background-color:#FED9ED;
  }
`

const UserName = styled.input`
  
`
const Password = styled.input`

`

const PasswordConfirm = styled.input`
  width:200 px;

`

const NickName = styled.input`
`

const University = styled.input`

`

const Location = styled.input`

`

const SignUpButton = styled.button`

`

const CompleteBody = styled.div`
  background-color:#070F2B; 
  height:790px;
  display:flex;
  flex-direction:column;
  gap:30px;
  justify-content:center;
  align-items:center;
`

const Complete = styled.div`
  
  
  
  font-size:35px;
  font-weight:800;
  color:white;
  
`
const BackHome  =styled.a`
  border:none;
  background-color:#070F2B;
  color:white;
  font-size:15px;
  font-weight:800;
`

const GoLogIn = styled.div`
  color:white;
  font-size:12px;
  margin:-10px 0;
`