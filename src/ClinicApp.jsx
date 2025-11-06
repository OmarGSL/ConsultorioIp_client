import { useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx"
import { ConsultorioRoutes } from "./routes/ClinicRoutes.jsx"
import { Footer } from "./components/Footer.jsx";

export const ClinicApp = () => {
  const location = useLocation();
  const hideComponent = ["/login", "register"].includes(location.pathname)
  return (
    <>

      {!hideComponent && <Navbar />}
      <ConsultorioRoutes />
      {!hideComponent && <Footer />}
    </>
  )
}
export default ClinicApp
