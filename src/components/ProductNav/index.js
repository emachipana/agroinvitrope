import { Container, Text } from "./styles";

function ProductNav({ currentLocation, handleChangeLocation }) {
  return (
    <Container>
      <Text
        isItem
        isActive={currentLocation === "todo"}
        onClick={() => handleChangeLocation("todo")}
      >
        Todo
      </Text>
      <Text>/</Text>
      <Text 
        isItem
        isActive={currentLocation === "insumo"}
        onClick={() => handleChangeLocation("insumo")}
      >
        Insumos
      </Text>
      <Text>/</Text>
      <Text
        isItem
        isActive={currentLocation === "material"}
        onClick={() => handleChangeLocation("material")}
      >
        Materiales
      </Text>
    </Container>
  );
}

export default ProductNav;
