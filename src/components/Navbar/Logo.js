import { Image, LogoContainer } from "./styles";

function Logo({ navigate }) {
	return (
		<LogoContainer onClick={() => navigate("/")} >
			<Image 
				src="assets/logo_green_wt-bg.png"
				alt="logo"
			/>
		</LogoContainer>
	);
}

export default Logo;
 