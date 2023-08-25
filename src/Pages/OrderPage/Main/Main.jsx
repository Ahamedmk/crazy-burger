import { styled } from "styled-components";
import { theme } from "../../../theme";
import { fakeMenu1 } from "../../../fakeData/fakeMenu";

export default function Main() {
  return <MainStyles>
    <div className="CardMenu">
      <div className="Burger">
      <img src={fakeMenu1[0].imageSource} alt="burger" />
      </div>
      <div>
        <h1>{fakeMenu1[0].title}</h1>
      </div>
    </div>
  </MainStyles>;
}
const MainStyles = styled.div`
  height: 83vh;
  max-width:1400px;
  background:${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  margin: 0 auto;
  .CardMenu {
    width: 240px;
    height:330px;
    border: 1px solid red ;
  }
  .Burger {
    display: flex;
    justify-content: center;
    border: 1px solid blue ;
    margin-top: 50px;
  
  img {
    width:200px;
    height:145px;
    border: 3px solid greenyellow ;
    

  }
}
`;
