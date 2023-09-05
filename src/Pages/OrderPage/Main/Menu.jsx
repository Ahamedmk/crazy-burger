/* eslint-disable no-unused-vars */

import { styled } from 'styled-components';

import { fakeMenu2 } from '../../../fakeData/fakeMenu';
import { useState } from 'react';
import Card from '../../../Reusable-ui/Card';

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2)
  
  return (
    <MenuSyled>
      {menu.map(({id,imageSource, title, price}) =>{ 
        return <Card key={id} image={imageSource} title={title} price={(price).toFixed(2)} />
    })}
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