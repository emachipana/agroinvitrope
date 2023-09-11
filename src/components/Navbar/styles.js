import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
	width: 100%;
	height: 100px;
	z-index: 15;
	position: sticky;
	top: 0;
	padding: 1rem 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: .3s ease-in;
	box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
	background-color: white;
	opacity: .98;

	.handle {
		display: none;
		cursor: pointer;
	}

	.nav {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 2rem;
		z-index: 5;
	}

	.icon {
		color: ${colors.secondary};
		font-size: 1.5rem;
	}

	@media screen and (max-width: 930px) {
		padding: 1rem 2rem;

		.nav {
			transition: .3s ease-in;
			position: fixed;
			left: -100%;
			top: 100px;
			flex-direction: column;
			justify-content: space-around;
			width: 100%;
			height: 87vh;
			padding: 2rem 1rem;
			background-color: white;
			opacity: .98;
		}

		.handle {
			display: block;
		}

		.nav.active {
			left: 0;
		}
	}
`;
                                           
export const ItemContainer = styled.div`
	displat: flex;
	align-items: center;
	font-size: 18px;
	font-weight: 700;
	padding: 0.35rem 0.9rem;
	transition: .2s ease-in;
	border-radius: 0.8rem;
	cursor: pointer;
	color: ${({ active }) => active 
		?
			`
				white;
				background-color: ${colors.primary};
			`
		: colors.secondary};
	
	&:hover {
		color: white;
		background-color: ${colors.primary};
	}
`;
