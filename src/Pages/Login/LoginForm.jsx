import { useState } from "react"
import {useNavigate } from "react-router-dom"
import {styled} from "styled-components"
import { theme } from "../../theme"
// import{BsPersonCircle} from "react-icons/bs"

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
            <div className="container">
              <h1>Bienvenue chez nous !</h1>
              <hr />
              <h2>Connectez vous</h2>
              <div className="container-form">
              {/* <BsPersonCircle className="icon" /> */}
                <input type="text" value={name} onChange={e => setName(e.target.value)} required="required" placeholder="Entrez votre prénom "/>
                <button >Accéder à mon espace {'>'} </button>
              </div>
            </div>
          </LoginFormStyled>  
        </>
      )

}
 const LoginFormStyled = styled.form`
 border: 3px solid red ; 
 display: flex;
 justify-content: center;
 align-items: center;
 
 .container {
  /* display: inline-block; */
  height: 250px;
  border: 1px solid green; 
 }
 .container-form {
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content:space-around;
  border: 1px solid red; 
 }
 input {
  padding: 10px;
  border-radius:5px;
  border: none;
  outline: none;
 }
 button {
  padding: 10px;
  border-radius:5px;
  outline: none;
  border: none;
 }
  .icon {
  position: absolute;
  /* top: 50%; */
  /* transform: translateY(-70%); */
  left: 8px;
}
 
 h1 {
   font-size:30px;
   font-family: 'Amatic SC', cursive;
   font-weight: 700;
   text-align: center;
   /* color:${theme.colors.greyBlue}; */
   /* background-color:green; */
 }

 hr{
  height: 3px;
        background-color: ${theme.colors.red};
        border: none;
 }
 
 h2 {
  font-family: 'Amatic SC', cursive;
   font-weight: 400;
  text-align: center;
 }
 `