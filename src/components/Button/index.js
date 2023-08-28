import { Container } from "./styles";

function Button({ children, alignment, fontSize, minFontSize, ...other }) {
  return (
    <Container
      {...other}
      minFontSize={minFontSize}
      fontSize={fontSize}
      alignment={alignment}
    >
      { children }
    </Container>
  )
}

export default Button;
