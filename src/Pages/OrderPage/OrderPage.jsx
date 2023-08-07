import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"

export default function OrderPage() {
  const params = useParams()
  console.log(params)
  return (
    <>
      <h1>Bonjour {params.id}</h1>
      <br />
      <Link to="/">
      <button>Déconnection</button>
      </Link>
    </>
  )
}
