 import ErrorPage from './Pages/ErrorPage/ErrorPage'
import LoginPage from './Pages/Login/LoginPage'
 import OrderPage from './Pages/OrderPage/OrderPage'
 import {Routes,Route } from 'react-router-dom'

function App() { 
  return (
    <>   
    <Routes>
      <Route path="/"element={<LoginPage />} />
      <Route path="/order/:username"element={<OrderPage />} />
      <Route path="*"element={<ErrorPage />} />
    </Routes>      
    </>
  )
}

export default App
