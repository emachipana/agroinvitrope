import { Container as Main, Title } from "../Services/styles";
import { DetailContainer, 
         DetailText,
         IconStyle,
         InfoContainer,
         InfoTitle,
         InfoTitleContainer,
         Container, 
         Section,
         Social} from "./styles";
import { AiFillPhone } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import Form from "../../components/Form";
import SocialCard from "../../components/SocialCard";

function ContactPage() {
  return (
    <Main>
      <Title>Contáctanos</Title>
      <Container width={90} >
        <InfoContainer>
          <InfoTitleContainer>
            <AiFillPhone style={IconStyle} />
            <InfoTitle>Teléfonos</InfoTitle>
          </InfoTitleContainer>
          <DetailContainer>
            <DetailText>+51 990 849 369</DetailText>
            <DetailText>+51 962 846 733</DetailText>
            <DetailText>+51 958 459 693</DetailText>
          </DetailContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoTitleContainer>
            <MdAlternateEmail style={IconStyle} />
            <InfoTitle>Correo</InfoTitle>
          </InfoTitleContainer>
          <DetailContainer>
            <DetailText>inversionesaraujojl@gmail.com</DetailText>
          </DetailContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoTitleContainer>
            <FaMapMarkedAlt style={IconStyle} />
            <InfoTitle>Dirección</InfoTitle>
          </InfoTitleContainer>
          <DetailContainer>
            <DetailText>Jr. San Bernardo N° 224, Sapallanga - Huancayo</DetailText>
          </DetailContainer>
        </InfoContainer>
      </Container>
      <Container
        width={100}
        content="center"
        gap={6}
      >
        <Section>
          <Title>Déjanos tus datos</Title>
          <Form />
        </Section>
        <Section>
          <Title>Nuestras Redes</Title>
          <Social>
            <SocialCard name="facebook" />
            <SocialCard name="instagram" />
            <SocialCard name="whatsapp" />
          </Social>
        </Section>
      </Container>
    </Main>
  );
}

export default ContactPage;
