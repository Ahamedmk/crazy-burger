
import {styled} from "styled-components"
import bigburger from "../../assets/logo-orange.png"
import { theme } from "../../theme"

export function LoginTitle() {
  return (
    <LoginTitleStyled>
        <div className="crazy">CRAZEE</div>
        <div><img src={bigburger} alt="image"></img> </div>
        <div className="burger">BURGER</div>
    </LoginTitleStyled>
  )
}

const LoginTitleStyled = styled.div`
display: flex;
justify-content: center;
text-align: center;
border: 1px solid white;
img {
  /* width:10px; */
  height: 80px;
}
.crazy{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Amatic SC', cursive;
   font-weight: 700;
   font-size: 60px;
  text-align: center;
  color: ${theme.colors.primary_burger};

}
.burger {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Amatic SC', cursive;
   font-weight: 700;
  text-align: center;
  font-weight: 700;
   font-size: 60px;
  text-align: center;
  color: ${theme.colors.primary_burger};
}
`
