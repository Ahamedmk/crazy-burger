import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import { styled } from 'styled-components';
import SideBarLeft from './SideBarLeft';
import SideBarRight from './SideBarRight';
export default function Navbar() {
    const {username} = useParams()
  return (
    <NavbarStyles>
      <SideBarLeft />
      <SideBarRight />
      {/* <h1>Bonjour {username} </h1>
      <Link to="/">
      <button>Déconnection</button>
      </Link> */}
      </NavbarStyles>
  )
}
const NavbarStyles = styled.div`
   display: flex;
 /* justify-content: space-between; */
  width: 1200px;
  height: 98.18px;
  border: 1px solid red;
  margin: 0 auto;


`;