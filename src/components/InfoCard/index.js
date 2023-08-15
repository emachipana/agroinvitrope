import Button from "../Button";
import { Container, Title, Info, Text } from "./styles";

function InfoCard() {
  return (
    <Container>
      <Title>¡Somos Agroinvitro PERU!</Title>
      <Info>By Inversiones Araujo JL E.I.R.L.</Info>
      <Text>
        Producción de plántulas IN VITRO de
        papa Mejorada y Nativa, según la
        Autoridad Nacional en Semillas.
      </Text>
      <Button>
        <a
          rel="noreferrer"
          style={{color: "white"}}
          target="_blank"
          href="https://api.whatsapp.com/send?phone=%2B51990849369&text=Hola%20estoy%20interesado%20en%20plantulas%20in%20vitro"
        >
          ¡Contactar!
        </a>
      </Button>
    </Container>
  );
}

export default InfoCard;
