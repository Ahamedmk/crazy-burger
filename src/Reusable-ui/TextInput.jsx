import { styled } from "styled-components";
import { theme } from "../theme";

export default function TextInput({ Icon, onChange, ...extraProps }) {
  return (
    <NputStyled>
      {Icon && Icon}
      <input type="text" onChange={onChange} {...extraProps} />
    </NputStyled>
  );
}
const NputStyled = styled.div`
  display: flex;
  padding: 10px;
  background-color: white;
  align-items: center;
  text-align: center;
  /* border: 1px solid red; */
  border-radius: ${theme.borderRadius.round};
`;
