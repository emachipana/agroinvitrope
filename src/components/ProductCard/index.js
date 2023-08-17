import Button from "../Button";
import { Container, Image, Link, Section, Text, Title } from "./styles";
import { BsWhatsapp } from "react-icons/bs";

function ProductCard({ name, imageSrc, description }) {
  return (
    <Container>
      <Image
        src={`assets/products/${imageSrc}`}
        alt={`${name}-photo`}
      />
      <Section>
        <Title>{ name }</Title>
        <Text>{ description }</Text>
      </Section>
      <Button
        alignment="start"
        fontSize={0.9}
        minFontSize={15}
      >
        <Link
          href={`https://api.whatsapp.com/send?phone=%2B51990849369&text=Hola%20estoy%20interesado%20en%20${name}`}
          target="_blank"
          rel="noreferrer"
        >
          <BsWhatsapp 
            size={17}
          />
          ¡Cotizar!
        </Link>
      </Button>
    </Container>
  );
}

export default ProductCard;
