import { useState } from "react"
import {useNavigate } from "react-router-dom"
import burger from "../../assets/burger-background.jpg"
import {styled} from "styled-components"
import { theme } from "../../theme"
import{BsPersonCircle} from "react-icons/bs"


 export function LoginForm() {
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
         setName("")
         navigate(`order/${name}`)
    }
  
    
    return (
        <>
          <LoginFormStyled onSubmit={handleClick} >
          <div className="first-container">
            <div className="container">
              <h1>Bienvenue chez nous !</h1>
              <h2>Connectez vous</h2>
              <div className="container-form">
              <BsPersonCircle className="icon" />
                <input type="text" value={name} onChange={e => setName(e.target.value)} required="required" placeholder="Entrez votre prénom "/>
                <button >Accéder à mon espace</button>
              </div>
            </div>
          </div>
          </LoginFormStyled>  
        </>
      )

}
 const LoginFormStyled = styled.form`
 border: 1px solid blue ;
 background-image: url('../../assets/burger-background.jpg');
  background-size: cover;
  background-position: center;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 
 .first-container {
  border: 3px solid yellowgreen ;
  background-image: url(${burger});
  background-size: cover;
  background-position: center;
 height: 100vh;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 }
 
 .container {
  position: relative;
  display: inline-block;
  border: 1px solid green;
 }
 .container-form {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
 }
  .icon {
  position: absolute;
  /* top: 50%; */
  /* transform: translateY(-70%); */
  left: 8px;
}
 
 h1 {
   font-size:50px;
   color:${theme.colors.greyBlue};
   background-color:green;
 }
 h2 {
  text-align: center;
 }
 `