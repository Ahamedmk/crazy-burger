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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  margin: 0 auto;
  max-width: 500px;
  min-width: 400px;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: 'Amatic SC',cursive;

  
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
    color: ${theme.colors.white};
    font-size:${theme.fonts.size.P5} ;
  }

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom:${theme.gridUnit * 5}px ;
  }

  h2 {
   
    color: ${theme.colors.white};
    font-weight: 400;
    font-size:${theme.fonts.size.P4};
    margin-bottom: 0;
  }
`;
