/* eslint-disable react/prop-types */

import { styled } from 'styled-components';
import ButtonPrimary from './ButtonPrimary'

export default function Card({key, image, title, price }) {

    function tronquerAvecEllipse(texte, longueurMax) {
        if (texte.length > longueurMax) {
            return texte.substring(0, longueurMax) + "...";
        }
        return texte;
    }

  return (
    
        <CardMenuStyled  key={key}>
        
        <div className="Burger">
        <img src={image} alt="burger" />
        </div>
        <div>
          <h1>
            {tronquerAvecEllipse((title),15)}
            </h1>
          <div className="validatePrice">
            <span style={{color:"orange"}}>{price} €</span>
            <ButtonPrimary label="Ajouter" classname="changeButton"/>
          </div>
        </div>
      </CardMenuStyled>
    
  )
}

const CardMenuStyled = styled.div`

    /* display: flex;
    flex-direction: column; */
    background-color: white;
    width: 240px;
    height:330px;
    /* border: 1px solid red; */
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  
  .Burger {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    width: 200px;
    height: 145px;
    /* border: 1px solid blue ; */
    margin-top: 50px;
  
  img {
    width:100%;
    height:100%;
    object-fit: contain;
    background-size: cover;
  background-position: center;
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