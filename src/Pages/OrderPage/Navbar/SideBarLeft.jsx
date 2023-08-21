import { styled } from "styled-components";
import { LoginTitle } from "../../Login/LoginTitle";
import { refreshPage } from "../../../utils/window";

export default function SideBarLeft() {
  return <SideBarLeftStyles>
    <LoginTitle classname="logo-order-page" onClick={refreshPage}/>
    </SideBarLeftStyles>;
}
const SideBarLeftStyles = styled.div`
  display: flex;
  height: 100%;
  padding-left: 20px; 
  .logo-order-page {
    cursor: pointer;
  }
  /* border: 1px solid green; */
`;
