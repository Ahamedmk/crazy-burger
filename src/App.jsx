 import ErrorPage from './Pages/ErrorPage/ErrorPage'
import LoginPage from './Pages/Login/LoginPage'
 import OrderPage from './Pages/OrderPage/OrderPage'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() { 
  return (
    <>   
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<LoginPage />} />
      <Route path="/order/:id"element={<OrderPage />} />
      <Route path="*"element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
           
    </>
  )
}

export default App
