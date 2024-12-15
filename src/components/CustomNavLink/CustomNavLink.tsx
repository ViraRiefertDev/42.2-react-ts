import { StyledNavLink } from './styles';
import { CustomNavLinkProps } from './types';

function CustomNavLink({ linkName }: CustomNavLinkProps) {
  const linkTitle =
    linkName.charAt(0).toUpperCase() + linkName.slice(1).toLowerCase();
  const link = `/${linkTitle === 'Home' ? '' : linkName.toLowerCase()}`;

  return (
    <StyledNavLink
      to={link}
      style={({ isActive }) => ({
        textDecoration: isActive ? 'underline' : 'none',
      })}
    >
      {linkTitle}
    </StyledNavLink>
  );
}

export default CustomNavLink;
