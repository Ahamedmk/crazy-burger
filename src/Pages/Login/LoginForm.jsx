import { useState } from "react"
import {useNavigate } from "react-router-dom"
import {styled} from "styled-components"
import { theme } from "../../theme"


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
          <h1>Bienvenue chez nous !</h1>
          <h2>Connectez vous</h2>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required="required" placeholder="Entrez votre prénom..." />
          <button >Accédez à votre espace</button>
          </LoginFormStyled>  
        </>
      )

}
 const LoginFormStyled = styled.form`
 border: 1px solid blue ;
 h1 {
   font-size:50px;
   color:${theme.colors.greyBlue};
   background-color:green;
 }
 `