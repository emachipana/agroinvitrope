import { useNavigate } from "react-router";
import Logo from "../Logo";
import { Container, Section, Text, Title } from "./styles";
import { 
  AiFillHome,
  AiFillShop,
  AiFillSchedule,
  AiFillPhone,
  AiFillFacebook,
  AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <Section 
        direction="column"
        isComplete
      >
        <Section
          direction="row"
          isComplete
        >
          <Logo 
            navigate={navigate}
            src="logo_white_wt-bg.png"
            size={180}
            mediaSize={150}
          />
          <Section direction="column" >
            <Title>Navegación</Title>
            <Text 
              isLink
              onClick={() => navigate("/")}
            >
              <AiFillHome 
                size={17}
              />
              Inicio
            </Text>
            <Text 
              isLink
              onClick={() => navigate("/productos")}
            >
              <AiFillShop 
                size={17}
              />
              Productos
            </Text>
            <Text 
              isLink
              onClick={() => navigate("/nosotros")}
            >
              <AiFillSchedule 
                size={17}
              />
              Nosotros
            </Text>
          </Section>
          <Section direction="column">
            <Title>Contacto</Title>
            <Text>
              <AiFillPhone 
                size={17}
              />
              +51 990849369
            </Text>
            <Text>
              <AiFillPhone 
                size={17}
              />
              +51 962846733
              </Text>
            <Text>
              <AiFillPhone 
                size={17}
              />
              +51 958459693
            </Text>
          </Section>
          <Section direction="column">
            <Title>Redes</Title>
            <Text
              isLink
              target="_blank"
              href="https://www.facebook.com/agroinvitrope"
            >
              <AiFillFacebook 
                size={17}
              />
              Facebook
            </Text>
            <Text
              isLink
              target="_blank"
              href="https://www.instagram.com/agroinvitroperu"
            >
              <AiFillInstagram 
                size={17}
              />
              Instagram
            </Text>
            <Text
              isLink
              target="_blank"
              href="https://api.whatsapp.com/send?phone=%2B51990849369&text=Hola%20estoy%20interesado%20en%20plantulas%20in%20vitro"
            >
              <IoLogoWhatsapp 
                size={17}
              />
              Whatsapp
            </Text>
          </Section>
        </Section>
      </Section>
    </Container>
  )
}

export default Footer;
