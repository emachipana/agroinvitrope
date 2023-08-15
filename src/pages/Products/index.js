import Banner from "../../components/Banner";
import Slider from "../../components/Slider";

function ProductsPage() {
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
  
  return (
    <>
      <Slider
        isBanner
        images={imagesForSlider}
        Item={Banner}
        borderRadius={1}
        maxHeight={45}
        height={40}
        width={65}
      />
    </>
  );
}

export default ProductsPage;
