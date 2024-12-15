import { Link } from 'react-router-dom';
import Rolex from './components/Rolex/Rolex';
import { ClientsList, ClientLink } from './styles';

function Clients() {
  return (
    <ClientsList>
      <ClientLink>
        <Link to='/clients/rolex'>Rolex</Link>
      </ClientLink>
      <ClientLink>
        <Link to='/clients/patekPhilippe'>Patek Philippe</Link>
      </ClientLink>
      <ClientLink>
        <Link to='/clients/audemarsPiguet'>Audemars Piguet</Link>
      </ClientLink>
    </ClientsList>
  );
}

export default Clients;
