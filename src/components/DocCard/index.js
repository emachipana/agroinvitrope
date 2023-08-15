import { Container, DocContainer, Image, SoonContainer } from "./styles";

function DocCard({ company }) {
  const DOC = {
    senasa: "",
    cip: "",
    inia: ""
  }

  return (
    <Container>
      <Image
        isLogo
        src={`assets/logo/external/${company}.png`}
        alt={`${company}-logo`}
      />
      <DocContainer>
        {
          DOC[company] === ""
            ? <SoonContainer> Proximamente... </SoonContainer>
            : <Image 
                src={`assets/photo/${DOC[company]}.jpg`}
                alt={`${company}-doc`}
              />
        }
      </DocContainer>
    </Container>
  )
}

export default DocCard;
