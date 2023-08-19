import { styled } from "styled-components";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
export default function Navbar() {
  return (
    <NavbarStyles>
      <SideBarLeft />
      <SideBarRight />
    </NavbarStyles>
  );
}
const NavbarStyles = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 1200px;
  height: 98.18px;
  border: 1px solid red;
  margin: 0 auto;
`;
