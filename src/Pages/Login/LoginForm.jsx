import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../Reusable-ui/TextInput";
import ButtonPrimary from "../../Reusable-ui/ButtonPrimary";

export function LoginForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setName("");
    navigate(`order/${name}`);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <LoginFormStyled onSubmit={handleClick}>
      <div className="container">
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez vous</h2>
        <div className="container-form">
          <TextInput value={name} onChange={handleChange} placeholder={"Entrez votre prénom "} Icon={<BsPersonCircle className="icon" />} required />
          <ButtonPrimary Icon={<IoChevronForward className="secondIcon" />} label={"Accéder à mon espace"}/>
        </div>
      </div>
    </LoginFormStyled>
  );
}
const LoginFormStyled = styled.form`
  /* border: 3px solid red ;  */
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 250px;
    width: 280px;
    /* border: 1px solid green;  */
  }
  .container-form {
    display: flex;
    height: 100px;
    flex-direction: column;
    justify-content: space-around;
    /* border: 1px solid red;  */
  }

  input {
    border: none;
    outline: none;
    width: 100%;
  }
  
  .icon {
    color: gray;
    margin-right: 5px;
  }
  .secondIcon {
    margin-left: 5px;
  }

  h1 {
    font-size: 30px;
    color: whitesmoke;
    font-family: "Amatic SC", cursive;
    font-weight: 700;
    text-align: center;
  }

  hr {
    height: 2px;
    background-color: ${theme.colors.red};
    border: none;
  }

  h2 {
    font-family: "Amatic SC", cursive;
    color: whitesmoke;
    font-weight: 400;
    text-align: center;
    margin-bottom: 0;
  }
`;
