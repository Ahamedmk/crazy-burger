// import { useParams } from 'react-router-dom'
// import { Link } from "react-router-dom"
import { styled } from 'styled-components';
import Navbar from './Navbar/Navbar'
import Main from './Main/Main';

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className='container'>
      <Navbar />
      <Main />
      </div>
      
    </OrderPageStyled>
  )
}
const OrderPageStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top:10px;

 .container {
  border: 2px solid red;
  height: 95vh;
  width: 95vw;
  
 }
  
  &:before {
  content: "";
  background:#FF9F1A;
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  }
`;
