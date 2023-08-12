import { useState } from "react"
import {useNavigate } from "react-router-dom"
import burger from "../../assets/burger-background.jpg"
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
          <div className="first-container">
            <div className="container">
              <h1>Bienvenue chez nous !</h1>
              <hr className="custom-hr" />
              <h2>Connectez vous</h2>
              <div className="container-form">
              {/* <BsPersonCircle className="icon" /> */}
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
 /* border: 5px solid red ; */
 
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 
 .first-container {
  /* border: 3px solid yellowgreen ; */
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
  height: 250px;
  /* border: 1px solid green; */
 }
 .container-form {
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content:space-around;
  /* border: 1px solid red; */
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
   /* color:${theme.colors.greyBlue}; */
   /* background-color:green; */
 }

 hr{
  color:${theme.colors.greyBlue};
 }
 
 h2 {
  text-align: center;
 }
 `