import { useEffect, useState } from 'react';
import axios from 'axios';
import { ImAngry } from 'react-icons/im';
import { v4 } from 'uuid';

import Button from '../../components/Button/Button';
import CatsFact from '../../components/CatsFact/CatsFact';
import {
  Lesson10Container,
  Title,
  ButtonsContainer,
  InfoContainer,
  TaskContainer,
  ButtonWrapper,
} from './styled';

import Spinner from '../../components/Spinner/Spinner';

function Lesson10() {
  const [catsFacts, setCatsFacts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newError, setNewError] = useState<string | null>(null);

  const CAT_URL = 'https://catfact.ninja/fact';

  const getCatPhoto = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(CAT_URL);
      setCatsFacts([...catsFacts, response.data.fact]);
    } catch (error) {
      if (error instanceof Error) {
        setNewError(error.message);
      } else {
        setNewError('An anknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnInfoClick = () => {
    getCatPhoto();
  };

  const handleOnDeleteInfoClick = () => {
    setCatsFacts([]);
  };

  const handleOnDeleteFactClick = (indexToRemove: number) => {
    setCatsFacts((prevFacts) => {
      const updatedFacts = [...prevFacts];
      updatedFacts.splice(indexToRemove, 1);
      return updatedFacts;
    });
  };

  const createCatFactList = catsFacts.map((fact, index) => (
    <CatsFact
      key={v4()}
      fact={fact}
      deleteFact={() => {
        handleOnDeleteFactClick(index);
      }}
    />
  ));

  const renderContent = () => {
    if (newError) {
      return (
        <InfoContainer>
          <ImAngry />
          {newError}
        </InfoContainer>
      );
    }
    if (catsFacts.length > 0) {
      return <InfoContainer>{createCatFactList}</InfoContainer>;
    }
  };

  useEffect(() => {
    getCatPhoto();
  }, []);

  return (
    <Lesson10Container>
      <TaskContainer>
        <Title>Факты о кошках</Title>
        <ButtonsContainer>
          <ButtonWrapper>
            {isLoading && <Spinner />}
            {!isLoading && (
              <Button name='GET MORE INFO' onClick={handleOnInfoClick} />
            )}
          </ButtonWrapper>
          {catsFacts.length > 0 && (
            <Button
              name='DELETE ALLDATA'
              onClick={handleOnDeleteInfoClick}
              disabled={false}
            />
          )}
        </ButtonsContainer>
        {renderContent()};
      </TaskContainer>
    </Lesson10Container>
  );
}

export default Lesson10;
