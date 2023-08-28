import ServiceCard from "../../components/ServiceCard";
import { SERVICES } from "../../data";
import { Title, Container, Section } from "./styles";

function ServicesPage() {
  return (
    <>
      <Container>
        <Title>Ofrecemos: </Title>
        <Section>
          {
            SERVICES.map((service, index) => (
              <ServiceCard
                key={index} 
                name={service.name}
                img={service.img}
                details={service.details}
              />
            ))
          }
        </Section>
      </Container>
    </>
  );
}

export default ServicesPage;
