import { ItemContainer } from "./styles";

function NavItem({ location, navigate, to, children }) {
  return (
    <ItemContainer
      active={location === to}
      onClick={() => navigate(to)}
    >
      { children }
    </ItemContainer>
  );
}

export default NavItem;
