import { useNavigate, useLocation } from 'react-router-dom';
import Button from 'components/Button/Button';

function GoBackButton() {

  const navigate = useNavigate();
  const location = useLocation();

  const previousPageLink = location.pathname.slice(0, location.pathname.lastIndexOf('/'));

  const goToPreviousPage = () => {
    navigate(previousPageLink);
  };

  return <Button name='Go Back' onClick={goToPreviousPage} />;
}

export default GoBackButton;
