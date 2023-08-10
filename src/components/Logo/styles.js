import styled from "@emotion/styled";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	overflow: hidden;
`;

export const Image = styled.img`
	object-fit: cover;
	max-width: ${({ size }) => size}px;

	@media screen and (max-width: 770px) {
		max-width: ${({ mediaSize }) => mediaSize}px;
	}
`;
