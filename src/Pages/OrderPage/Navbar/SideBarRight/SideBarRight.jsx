import { styled } from "styled-components";
import Identification from "./Identification";

export default function SideBarRight() {
  return <SideBarRightStyled>
    <Identification />
    </SideBarRightStyled>;
}
const SideBarRightStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 600px;
  border: 1px solid green;
`;
