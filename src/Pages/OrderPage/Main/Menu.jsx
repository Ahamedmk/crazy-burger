
import { styled } from 'styled-components';
import ButtonPrimary from '../../../Reusable-ui/ButtonPrimary';
import { fakeMenu2 } from '../../../fakeData/fakeMenu';

export default function Menu() {
  
  function tronquerAvecEllipse(texte, longueurMax) {
    if (texte.length > longueurMax) {
        return texte.substring(0, longueurMax) + "...";
    }
    return texte;
}
  return (
    <MenuSyled>
      {fakeMenu2.map(fakeMenu =>(
      <div className="CardMenu" key={fakeMenu.id}>
        
      <div className="Burger">
      <img src={fakeMenu.imageSource} alt="burger" />
      </div>
      <div>
        <h1>
          {tronquerAvecEllipse((fakeMenu.title),15)}
          </h1>
        <div className="validatePrice">
          <span style={{color:"orange"}}>{(fakeMenu.price).toFixed(2)} €</span>
          <ButtonPrimary label="Ajouter" classname="changeButton"/>
        </div>
      </div>
    </div>
    ))}
    </MenuSyled>
  )
}
 
const MenuSyled = styled.div`
display: grid;
grid-template-columns: 240px 240px 240px 240px;
grid-row-gap: 60px;
gap: 30px;

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