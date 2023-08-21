
import {styled} from "styled-components"
import bigburger from "../../assets/logo-orange.png"
import { theme } from "../../theme"

export function LoginTitle({classname, onClick}) {
  return (
    <LoginTitleStyled className={classname} onClick={onClick}>
        <h1>CRAZEE</h1>
        <img src={bigburger} alt="image"></img>
        <h1>BURGER</h1>
    </LoginTitleStyled>
  )
}

const LoginTitleStyled = styled.div`
display: flex;
align-items: center;
 justify-content: center;
img {
  object-fit: contain;
  object-position: center;
  height: 60px;
  width: 80px;
  margin: 0 5px;
}
h1{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1em;
  letter-spacing: 1.5px;
  font-family: 'Amatic SC', cursive;
   font-weight: ${theme.fonts.weights.bold};
   font-size: ${theme.fonts.size.P4};
  text-align: center;
  color: ${theme.colors.primary};

}
`;
