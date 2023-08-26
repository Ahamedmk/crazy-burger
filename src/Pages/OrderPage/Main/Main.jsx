import { styled } from "styled-components";
import { theme } from "../../../theme";
import { fakeMenu1 } from "../../../fakeData/fakeMenu";
import  ButtonPrimary from "../../../Reusable-ui/ButtonPrimary"

export default function Main() {

  function tronquerAvecEllipse(texte, longueurMax) {
    if (texte.length > longueurMax) {
        return texte.substring(0, longueurMax) + "...";
    }
    return texte;
}
  return <MainStyles>
    <div className="CardMenu">
      <div className="Burger">
      <img src={fakeMenu1[0].imageSource} alt="burger" />
      </div>
      <div>
        <h1>
          {tronquerAvecEllipse((fakeMenu1[0].title),15)}
          </h1>
        <div className="validatePrice">
          <span style={{color:"orange"}}>{(fakeMenu1[0].price).toFixed(2)} €</span>
          <ButtonPrimary label="Ajouter" classname="changeButton"/>
        </div>
      </div>
    </div>
  </MainStyles>;
}
const MainStyles = styled.div`
  height: 83vh;
  max-width:1400px;
  background:${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  padding: 50px 50px 150px;
  margin: 0 auto;
  .CardMenu {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 240px;
    height:330px;
    /* border: 1px solid red; */
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  }
  .Burger {
    display: flex;
    justify-content: center;
    /* border: 1px solid blue ; */
    margin-top: 50px;
  
  img {
    width:200px;
    height:145px;
    /* border: 3px solid greenyellow ;   */
  }
}
h1 {
  margin-bottom: 0px;
  padding-left: 25px;
  font-family: 'Amatic SC', cursive;
}
.validatePrice {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* border: 1px solid green;   */
}

.changeButton{
  padding-left:25px;
  padding-right:25px;
  &:hover{
    border: 1px solid orange;
    background-color: white;
  }
}
`;
