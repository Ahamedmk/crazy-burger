import { styled } from "styled-components";

export default function TextInput({ value, Icon, onChange, ...extraProps }) {
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
  background-color: whitesmoke;
  text-align: center;
  /* border: 1px solid red; */
  border-radius: 5px;
`;
