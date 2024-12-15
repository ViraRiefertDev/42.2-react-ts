import { useNavigate } from 'react-router-dom';

import { LogoContainer } from './styles';

function Logo() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/');
  };

  return <LogoContainer onClick={goToHomePage}></LogoContainer>;
}

export default Logo;
