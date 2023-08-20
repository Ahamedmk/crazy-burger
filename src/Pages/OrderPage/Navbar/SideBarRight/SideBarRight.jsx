import { styled } from "styled-components";
import Identification from "./Identification";

export default function SideBarRight() {
  return <SideBarRightStyled>
    <Identification />
    </SideBarRightStyled>;
}
const SideBarRightStyled = styled.div`
  display: flex;
  height: 100%;
  color: grey;
  padding-right: 50px;
  border: 1px solid green; 
`;
