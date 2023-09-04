import { Container, Image, Section, Text, TextContainer, Title } from "./styles";

function AboutPage() {
  return (
    <Container>
      <Section alignX="center">
        <TextContainer>
          <Title align="start">Nuestra historia</Title>
          <Text>
            <i>INVERSIONES ARAUJO JL E.I.R.L. </i>nace en abril del 2015
            cuando dos ingenieros agrónomos con amplia experiencia
            en el rubro agrícola, deciden formar una empresa dedicada
            a la producción de semillas pre básica (plántulas in vitro
            y tuberculillos), consolidándose como una empresa emergente
            con gran capacidad para llevar a cabo los proyectos de sus
            clientes.
            A la fecha, la empresa ha realizado importantes entregas a
            productores de semilla a nivel de invernaderos y a entidades
            públicas, así mismo, se viene participando en las actividades
            de investigación con el Instituto Nacional de Innovación
            Agraria (INIA E.E. Santa Ana Huancayo). 
          </Text>
        </TextContainer>
        <TextContainer>
          <Image 
            src="assets/photo/complete_6.jpg"
            alt="history-photo"
          />
        </TextContainer>
      </Section>
      <Section align="center">
        <TextContainer width={400}>
          <Title>Misión</Title>
          <Text>
            Disponer plántulas <i>IN VITRO</i> de primera calidad y que
            satisfagan completamente los requerimientos de nuestros clientes,
            estableciendo relaciones de largo plazo basadas en nuestras
            capacidades, nuestra honestidad y nuestro compromiso.
          </Text>
        </TextContainer>
        <TextContainer width={400}>
          <Title>Visión</Title>
          <Text>
            Posicionarnos en el mercado nacional como una empresa confiable,
            comprometida, responsable en la dotación de plántulas <i>IN VITRO</i>.
          </Text>
        </TextContainer>
      </Section>
      <Section align="center">
        <TextContainer>
          <Title>Valores</Title>
          <Text>
            <i>INVERSIONES ARAUJO</i>, a través de <i>Agroinvitro PERÚ</i>, se
            caracteriza por la honestidad de sus profesionales, el compromiso con
            los proyectos que desarrollamos y la responsabilidad con nuestro medio
            ambiente.
          </Text>
        </TextContainer>
      </Section>
    </Container>
  );
}

export default AboutPage;
