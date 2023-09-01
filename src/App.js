import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsPage from "./pages/Products";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/nosotros" element={<h1>About us page</h1>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
