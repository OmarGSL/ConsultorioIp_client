import { Route, Routes } from "react-router-dom"
import {Home} from "../pages/Home"
import Login  from "../auth/pages/Login"

export const ConsultorioRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
    </Routes>
  )
}
