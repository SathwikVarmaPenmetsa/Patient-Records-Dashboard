import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Navbar from './pages/Navbar'
import AppRoutes from './RoutesSetUP/AppRoutes'
import Fotter from './pages/Fotter'
function App() {

  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Fotter />
    </Router>
    
  )
}

export default App
