import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsPage from "./pages/Products";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/nosotros" element={<h1>About us page</h1>} />
          <Route path="/contacto" element={<h1>Contact page</h1>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
