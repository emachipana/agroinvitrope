import { Tooltip } from "reactstrap";
import { Container } from "./styles";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";

function WhatsappButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    setTimeout(() => {
      setIsOpen(false);
    }, 6000)
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container
        href="https://api.whatsapp.com/send?phone=%2B51990849369&text=Hola%20deseo%20m%C3%A1s%20informaci%C3%B3n"
        target="_blank"
        rel="noreferrer"
        id="wsp-button"
      >
        <BsWhatsapp />
        <Tooltip
          isOpen={isOpen}
          target="wsp-button"
          toggle={toggle}
          placement="right"
        >
          ¡Más información!
        </Tooltip>
      </Container>
    </>
  )
}

export default WhatsappButton;
