import { Container, Name } from "./styles";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

const LOGOS = {
  "facebook": {
    Logo: <FaFacebookSquare
      color="#17A8FC"
      size={40}
    />,
    link: "https://www.facebook.com/agroinvitrope"
  },
  "instagram": {
    Logo: <FaInstagramSquare 
      color="#E3204C"
      size={40}
    />,
    link: "https://www.instagram.com/agroinvitroperu"
  },
  "whatsapp": {
    Logo: <FaWhatsappSquare 
      color="#60FA7E"
      size={40}
    />,
    link: "https://api.whatsapp.com/send?phone=%2B51990849369&text=Hola%20deseo%20más%20información%20sobre"
  }
}

function SocialCard({ name }) {
  return (
    <Container 
      href={LOGOS[name].link}
      target="_blank"
    >
      { LOGOS[name].Logo }
      <Name>{ name.charAt(0).toUpperCase() + name.slice(1) }</Name>
    </Container>
  );
}

export default SocialCard;
