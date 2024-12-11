import { ButtonWrapper, Fact, FactContainer, Line } from './styles';
import { catsFactProps } from './types';
import line from '../../assets/WPILine.svg';
import Button from '../Button/Button';

function CatsFact({ fact, deleteFact}: catsFactProps) {


  return (
    <>
      <FactContainer>
        <Fact>{fact}</Fact>
        <ButtonWrapper>
          <Button name='DELETE' onClick={deleteFact} />
        </ButtonWrapper>
      </FactContainer>
      <Line src={line} />
    </>
  );
}

export default CatsFact;
