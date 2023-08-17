import Button from "../Button";
import { Container, Text } from "./styles";

function Banner() {
  return (
    <Container>
      <Text>
        ¡Plántulas in vitro de papa
        mejorada y nativa!
      </Text>
      <Button
        fontSize={1.2}
        minFontSize={18}
        alignment="center"
      >
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=%2B51990849369&text=Hola%20estoy%20interesado%20en%20plantulas%20in%20vitro"
          rel="noreferrer"
        >
          ¡Hacer pedido!
        </a>
      </Button>
    </Container>
  );
}

export default Banner;
