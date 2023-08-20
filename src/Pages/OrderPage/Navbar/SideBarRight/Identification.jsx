import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../../theme";

export default function Identification() {
  const { username } = useParams();
  return (
    <IdentificationStyled>
      <div>
        <h4>Hey, <span className="name">{username}</span> </h4>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <BsPersonCircle className="icon" />
    </IdentificationStyled>
  );
}
const IdentificationStyled = styled.div`
display: flex;
justify-content: flex-end; 
max-width: 250px;
border: 1px solid yellow;
margin: auto 0;
/* margin-right: 70px; */
h4 {
    margin: 0px;
}
button {
    padding: 0;
    font-size: 12px;
    white-space: nowrap;
    border: none;
    color: grey;
    background-color: white;
    text-decoration: none;
}
.name {
  color: ${theme.colors.primary};
}
.icon {
    font-size: 36px;
    padding: 10px;   
}
`;
