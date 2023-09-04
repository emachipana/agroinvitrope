import { colors } from "../../styles";
import { Container } from "./styles";
import { SyncLoader } from "react-spinners";

function Loader() {
  return (
    <Container>
      <SyncLoader 
        size={20}
        color={colors.primary}
      />
    </Container>
  );
}

export default Loader;
