import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Container } from "./styles";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import NavItem from "./NavItem";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const handleOpen = (to) => {
		navigate(to);
		window.scrollTo(0, 0);
		if(!isOpen) return;
		setIsOpen(!isOpen);
	}

	return (
		<Container>
			<Logo 
				navigate={navigate}
			/>
			<section
				className="handle"
				onClick={() => setIsOpen(!isOpen)}
			>
				{
					isOpen
					?
						<IoClose className="icon" />
					:
						<HiMenuAlt3 className="icon" />
				}
			</section>
			<nav
				className={isOpen ? "nav active" : "nav"}
			>
				<NavItem
					location={location.pathname}
					navigate={handleOpen}
					to="/"
				>
					Inicio
				</NavItem>
				<NavItem
					location={location.pathname}
					navigate={handleOpen}
					to="/productos"
				>
					Productos
				</NavItem>
				<NavItem
					location={location.pathname}
					navigate={handleOpen}
					to="/nosotros"
				>
					Nosotros
				</NavItem>
				<NavItem
					location={location.pathname}
					navigate={handleOpen}
					to="/Contacto"
				>
					Contacto
				</NavItem>
			</nav>
		</Container>
	);
}

export default Navbar;
