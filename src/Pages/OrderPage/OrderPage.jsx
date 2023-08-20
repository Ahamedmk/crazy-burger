// import { useParams } from 'react-router-dom'
// import { Link } from "react-router-dom"
import { styled } from 'styled-components';
import Navbar from './Navbar/Navbar'

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <Navbar />
      
    </OrderPageStyled>
  )
}
const OrderPageStyled = styled.div`
  
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
