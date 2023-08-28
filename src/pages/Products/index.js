import { useState } from "react";
import Banner from "../../components/Banner";
import ProductNav from "../../components/ProductNav";
import Slider from "../../components/Slider";
import { ProductsContainer } from "./styles";
import { IMAGESFORSLIDER, PRODUCTS } from "../../data";
import ProductCard from "../../components/ProductCard";

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
        images={IMAGESFORSLIDER.products}
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
            .sort(() => Math.random() - 0.5)
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
