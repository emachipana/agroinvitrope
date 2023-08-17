import { useState } from "react";
import Banner from "../../components/Banner";
import ProductNav from "../../components/ProductNav";
import Slider from "../../components/Slider";
import { ProductsContainer } from "./styles";
import { PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";

const imagesForSlider = [
  {
    src: "taper_1.jpg",
    alt: "plantula-photo"
  },
  {
    src: "complete_4.jpg",
    alt: "plantula-complete-photo"
  }
];

function ProductsPage() {
  const [currentLocation, setCurrentLocation] = useState("todo");

  const handleChangeLocation = (location) => {
    if(currentLocation === location) return;
    setCurrentLocation(location);
  }

  return (
    <>
      <Slider
        isBanner
        images={imagesForSlider}
        Item={Banner}
        borderRadius={1}
        maxHeight={45}
        height={35}
        width={65}
        maxWidth={85}
      />
      <ProductNav 
        currentLocation={currentLocation}
        handleChangeLocation={handleChangeLocation}
      />
      <ProductsContainer>
        {
          PRODUCTS
            .filter(product => currentLocation === "todo" || currentLocation === product.category)
            .map((product, index) => (
              <ProductCard 
                key={index}
                description={product.description}
                imageSrc={product.src}
                name={product.name}
                price={product.price}
              />
            ))
        }
      </ProductsContainer>
    </>
  );
}

export default ProductsPage;
