import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/page";
import Sobre from "./pages/sobre/page";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* Outras rotas aqui */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

