import { styled } from "styled-components";
import Identification from "./Identification";
import ToggleButton from "../../../../Reusable-ui/ToggleButton";

export default function SideBarRight() {
  return <SideBarRightStyled>
    <ToggleButton />
    <Identification />
    </SideBarRightStyled>;
}
const SideBarRightStyled = styled.div`
  display: flex;
  height: 100%;
  color: grey;
  padding-right: 50px;
  /* border: 1px solid green;  */
`;
