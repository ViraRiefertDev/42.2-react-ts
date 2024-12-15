import { Link } from 'react-router-dom';
import Rolex from './components/Rolex/Rolex';
import { ClientsList, ClientLink } from './styles';
import { CLIENTS_LINKS } from './types';

function Clients() {
  return (
    <ClientsList>
      <ClientLink>
        <Link to={CLIENTS_LINKS.ROLEX_LINK}>Rolex</Link>
      </ClientLink>
      <ClientLink>
        <Link to={CLIENTS_LINKS.PATEK_PHILIPPE_LINK}>Patek Philippe</Link>
      </ClientLink>
      <ClientLink>
        <Link to={CLIENTS_LINKS.AUDEMARS_PIGUET_LINK}>Audemars Piguet</Link>
      </ClientLink>
    </ClientsList>
  );
}

export default Clients;
