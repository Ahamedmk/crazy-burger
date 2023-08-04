import { useState } from "react"


 export function Login() {
    const [name, setName] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        alert (`Bonjour ${name}` )
        setName("")
    }
    
    return (
        <>
          <h1>Bienvenue chez nous !</h1>
          <h2>Connectez vous</h2>
          <form onSubmit={handleClick} >
          <input type="text" value={name} onChange={e => setName(e.target.value)} required="required" placeholder="Entrez votre prénom..." />
          <button >Accédez à votre espace</button>
          </form>  
        </>
      )

}