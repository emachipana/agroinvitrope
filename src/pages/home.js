import DocCard from "../components/DocCard";
import Slider from "../components/Slider";
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
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</Text>
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
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</Text>
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
