import Slider from "../components/Slider";
import { Container, Image, Line, Section, Text, Title } from "./styles";

function HomePage() {
  return (
    <>
      <Slider />
      <Line />
      <Container>
        <Section direction="row">
          <Section direction="column">
            <Title>Propuesta de valor</Title>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</Text>
          </Section>
          <Image 
            src="assets/complete_1.jpg"
            alt="photo"
          />
        </Section>
        <Section direction="row">
          <Image 
            src="assets/complete_5.jpg"
            alt="photo"
          />
          <Section direction="column">
            <Title>La mejor calidad</Title>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</Text>
          </Section>
        </Section>
      </Container>
    </>
  );
}

export default HomePage;
