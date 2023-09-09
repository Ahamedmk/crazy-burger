/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { theme } from "../theme";

export default function ButtonPrimary({ label, Icon, classname }) {
  return (
    <ButtonPrimaryStyled className={classname}>
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
  background-color: ${theme.colors.primary};
  outline: none;
  border: none;
  transition: 0.1ms;

  &:hover {
    color: ${theme.colors.primary};
    background-color: whitesmoke;
    cursor: pointer;
    /* transition-delay: 250ms, 250ms; */
    /* transition-property: background-color, color; */
  }
`;
