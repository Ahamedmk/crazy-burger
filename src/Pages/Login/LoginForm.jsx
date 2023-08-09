import { useState } from "react"
import {useNavigate } from "react-router-dom"


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
          <form onSubmit={handleClick} >
          <h1>Bienvenue chez nous !</h1>
          <h2>Connectez vous</h2>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required="required" placeholder="Entrez votre prénom..." />
          <button >Accédez à votre espace</button>
          </form>  
        </>
      )

}