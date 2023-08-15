import { Image, Container } from "./styles";

function Logo({ navigate, src, size, mediaSize }) {
	return (
		<Container onClick={() => navigate("/")} >
			<Image 
				src={`assets/logo/agroinvitrope/${src}`}
				alt="logo"
				size={size}
				mediaSize={mediaSize}
			/>
		</Container>
	);
}

export default Logo;
 