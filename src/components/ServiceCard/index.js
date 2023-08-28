import Button from "../Button";
import { Link } from "../ProductCard/styles";
import { Container, DetailContainer, DetailText, DetailTitle, Image, ImageSection, Text, TextContainer } from "./styles";
import { BsWhatsapp } from "react-icons/bs";

function ServiceCard({ name, img = {}, details = [] }) {
  return (
    <Container>
      <ImageSection>
        <Image 
          alt={img.alt}
          src={`assets/photo/${img.src}`}
        />
        <TextContainer>
          <Text>{ name }</Text>
        </TextContainer>
      </ImageSection>
      {
        details.map((detail, index) => (
          <DetailContainer  key={index}>
            <DetailTitle>{ detail.title }</DetailTitle>
            <ul>
              {
                detail.list.map((item, index) => (
                  <DetailText key={index}>{ item }</DetailText>
                ))
              }
            </ul>
          </DetailContainer>
        ))
      }
      <Button
        style={{marginLeft: "1rem"}}
        alignment="start"
        fontSize={0.9}
        minFontSize={14}
      >
        <Link
          href={`https://api.whatsapp.com/send?phone=%2B51990849369&text=Hola%20estoy%20interesado%20en%20${name.split(" ")[0]}`}
          target="_blank"
          rel="noreferrer"
        >
          <BsWhatsapp 
            size={18}
          />
          ¡Contactar!
        </Link>
      </Button>
    </Container>
  );
}

export default ServiceCard;
