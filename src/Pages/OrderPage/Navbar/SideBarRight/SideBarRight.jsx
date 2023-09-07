import { styled } from "styled-components";
import Identification from "./Identification";
import ToggleButton from "../../../../Reusable-ui/ToggleButton";

export default function SideBarRight() {
  return <SideBarRightStyled>
    <ToggleButton
     className="toggleClass"
     labelIfChecked = "Désactiver le mode admin"
     labelIfUnchecked = "Activer le mode admin" />
    <Identification />
    </SideBarRightStyled>;
}
const SideBarRightStyled = styled.div`
  display: flex;
  height: 100%;
  color: grey;
  padding-right: 50px;
  /* border: 1px solid green;  */
  .toggleClass {
    align-items: center;
    margin-right: 40px;
  }
`;
