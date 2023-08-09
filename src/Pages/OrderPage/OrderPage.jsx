import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"

export default function OrderPage() {
  const {username} = useParams()
  return (
    <>
      <h1>Bonjour {username} </h1>
      <br />
      <Link to="/">
      <button>Déconnection</button>
      </Link>
    </>
  )
}
