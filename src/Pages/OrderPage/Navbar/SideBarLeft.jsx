import { styled } from "styled-components";
import { LoginTitle } from "../../Login/LoginTitle";

export default function SideBarLeft() {
  return <SideBarLeftStyles>
    <LoginTitle/>
    </SideBarLeftStyles>;
}
const SideBarLeftStyles = styled.div`
  height: 100%;
  padding-left: 20px;
  /* width: 600px; */
  
  border: 1px solid green;

`;
