import { styled } from "styled-components";
import { theme } from "../theme";
// import { BiChevronRight } from "react-icons/bi";

export default function ButtonPrimary({ label, Icon }) {
  return (
    <ButtonPrimaryStyled>
      <span>{label} </span>
      {Icon}
    </ButtonPrimaryStyled>
  );
}

const ButtonPrimaryStyled = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  color: whitesmoke;
  background-color: ${theme.colors.primary_burger};
  outline: none;
  border: none;

  &:hover {
    color: ${theme.colors.primary_burger};
    background-color: whitesmoke;
    cursor: pointer;
    transition-delay: 250ms, 250ms;
    transition-property: background-color, color;
  }
`;
