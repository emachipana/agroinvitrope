import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsPage from "./pages/Products";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import WhatsappButton from "./components/WspButton";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  window.addEventListener("load", () => {
    setIsLoading(false);
  });

  return (
    <>
      { !isLoading || <Loader /> }
      <WhatsappButton />
      <Navbar 
        setIsLoading={setIsLoading}
      />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
