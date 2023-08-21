
import { styled } from 'styled-components';

import SideBarRight from './SideBarRight/SideBarRight';
import SideBarLeft from './SideBarLeft';
import { theme } from '../../../theme';
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
  justify-content: space-between; 
  max-width: 1400px;
  height: 70px;
  /* border: 1px solid red; */
  border-radius: 20px 20px 0 0;
  margin: 0 auto;
  /* margin-top: 20px; */
  background:${theme.colors.white};
  font-family: "Open Sans", sans-serif;


`;