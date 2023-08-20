
import { styled } from 'styled-components';

import SideBarRight from './SideBarRight/SideBarRight';
import SideBarLeft from './SideBarLeft';
export default function Navbar() {
    
  return (
    <NavbarStyles>
      <SideBarLeft />
      <SideBarRight />
      </NavbarStyles>
  )
}
const NavbarStyles = styled.div`
   display: flex;
 /* justify-content: space-between; */
  width: 1200px;
  height: 98.18px;
  border: 1px solid red;
  border-radius: 20px 20px 0 0;
  margin: 0 auto;
  margin-top: 20px;


`;