import { Image, Container } from "./styles";

function Logo({ navigate, src, size, mediaSize }) {
	return (
		<Container onClick={() => navigate("/")} >
			<Image 
				src={`assets/${src}`}
				alt="logo"
				size={size}
				mediaSize={mediaSize}
			/>
		</Container>
	);
}

export default Logo;
 