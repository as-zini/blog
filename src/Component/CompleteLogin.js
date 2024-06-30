import { useEffect } from "react"
import { styled } from "styled-components"

export default function CompleteLogin(){


  return(
    <CompleteLoginBody>
      <CompleteTitle>로그인 성공!</CompleteTitle>
      <BackHome href="/">홈으로 돌아가기</BackHome>
    </CompleteLoginBody>
  )
}

const CompleteLoginBody = styled.div`
  background-color::#070F2B;
  height:800px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap:30px;
`

const CompleteTitle = styled.div`
  color:white;
  font-weight:900;
  font-size:40px;
`

const BackHome = styled.a`
  height:30px;
  border:none;
  font-weight:700

`