import { styled } from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return <MainStyles>Main</MainStyles>;
}
const MainStyles = styled.div`
  height: 83vh;
  max-width:1400px;
  background:${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  margin: 0 auto;
`;
