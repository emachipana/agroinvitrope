import { Container } from "./styles";

function Button({ children, alignment, fontSize, minFontSize }) {
  return (
    <Container
      minFontSize={minFontSize}
      fontSize={fontSize}
      alignment={alignment}
    >
      { children }
    </Container>
  )
}

export default Button;
