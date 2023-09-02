
import { styled } from 'styled-components';
import ButtonPrimary from '../../../Reusable-ui/ButtonPrimary';
import { fakeMenu2 } from '../../../fakeData/fakeMenu';
import { useState } from 'react';
import Card from '../../../Reusable-ui/Card';

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2)
  
  function tronquerAvecEllipse(texte, longueurMax) {
    if (texte.length > longueurMax) {
        return texte.substring(0, longueurMax) + "...";
    }
    return texte;
}
  return (
    <MenuSyled>
      {menu.map(fakeMenu =>{
        return (
          <Card key={fakeMenu.id} image={fakeMenu.imageSource} title={fakeMenu.title} price={(fakeMenu.price).toFixed(2)} />
    )})}
    </MenuSyled>
  )
}
 
const MenuSyled = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-row-gap: 60px;
padding: 50px 50px 150px;
justify-items: center;
`;