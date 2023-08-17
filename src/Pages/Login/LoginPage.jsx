
import { styled } from 'styled-components';
import {LoginForm} from './LoginForm'
import { LoginTitle } from './LoginTitle'
import burger from "../../assets/burger-background.jpg"


export default function LoginPage() {
  return (
    <LoginPageStyled>
      <LoginTitle /> 
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  &:before {
  content: "";
  background: url(${burger}) rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  }
  
`;