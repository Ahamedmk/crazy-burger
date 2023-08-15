import { useState } from "react"
import {useNavigate } from "react-router-dom"
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
            <div className="container">
              <h1>Bienvenue chez nous !</h1>
              <hr />
              <h2>Connectez vous</h2>
              <div className="container-form">
              {/* <BsPersonCircle className="icon" /> */}
              <div className="input-container">
              <div className="circle">
                <BsPersonCircle className="icon" />
              </div>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required="required" placeholder="Entrez votre prénom "/>
                </div>
                <button >Accéder à mon espace {'>'} </button>
              </div>
            </div>
          </LoginFormStyled>  
        </>
      )

}
 const LoginFormStyled = styled.form`
 /* border: 3px solid red ;  */
 display: flex;
 justify-content: center;
 align-items: center;
 
 .container {
  /* display: inline-block; */
  height: 250px;
  width: 280px;
  /* border: 1px solid green;  */
 }
 .container-form {
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content:space-around;
  /* border: 1px solid red;  */
 }
 .input-container{
  display: flex;
  /* justify-content: center; */
  padding: 10px;
  background-color: whitesmoke;
  text-align: center;
  /* border: 1px solid red; */
  border-radius:5px;
 }
  input {
  border: none;
   outline: none;
   width :100% ;
 } 
 button {
  padding: 10px;
  border-radius:5px;
  color:whitesmoke ;
  background-color: ${theme.colors.primary_burger};
  outline: none;
  border: none;
 }
 button:hover {
  color:${theme.colors.primary_burger} ;
  background-color:whitesmoke ;
  cursor: pointer;
 }
 .icon{
  color: gray;
  margin-right: 5px;
 }
.circle {
  display: flex;
  align-items: center;
}  
 
 h1 {
   font-size:30px;
   color: whitesmoke;
   font-family: 'Amatic SC', cursive;
   font-weight: 700;
   text-align: center;
   /* color:${theme.colors.greyBlue}; */
   /* background-color:green; */
 }

 hr{
  height: 2px;
        background-color: ${theme.colors.red};
        border: none;
 }
 
 h2 {
  font-family: 'Amatic SC', cursive;
  color: whitesmoke;
   font-weight: 400;
  text-align: center;
  margin-bottom: 0;
 }
 `