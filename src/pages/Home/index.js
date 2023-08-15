import DocCard from "../../components/DocCard";
import Slider from "../../components/Slider";
import { Container, Docs, Image, Line, Section, Text, Title } from "./styles";

function HomePage() {
  return (
    <>
      <Slider />
      <Line />
      <Container>
        <Section direction="row">
          <Section direction="column">
            <Title alignment="start" >Propuesta de valor</Title>
            <Text>
              Somos una empresa agrícola que se caracteriza
              por destinar los mejores recursos para lograr
              resultados óptimos en los proyectos y con ello
              agregarle valor a éstos, con el fin de mantener
              relaciones de largo plazo con sus clientes.
            </Text>
          </Section>
          <Image 
            src="assets/photo/complete_1.jpg"
            alt="photo"
          />
        </Section>
        <Section direction="row">
          <Image 
            src="assets/photo/complete_5.jpg"
            alt="photo"
          />
          <Section direction="column">
            <Title alignment="start" >La mejor calidad</Title>
            <Text>
              Disponemos de plantúlas in vitro de la mejor
              calidad proveidas directamente por el Centro
              Internacional de la Papa (CIP).
              <br />
              Esto se ve reflejado en nuestros clientes
              quienes han obtenido las mejores experiencias
              con nuestros productos.
            </Text>
          </Section>
        </Section>
      </Container>
      <Line />
      <Title
        style={{ margin: "2rem 0"}}
      >
        Documentos que nos acreditan
      </Title>
      <Docs>
        <DocCard company="senasa" />
        <DocCard company="cip" />
        <DocCard company="inia" />
      </Docs>
    </>
  );
}

export default HomePage;
