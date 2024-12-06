import { useEffect, useState } from 'react';
import axios from 'axios';

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
import { Fact } from './types';
import Spinner from '../../components/Spinner/Spinner';

function Lesson10() {
  const [catsFacts, setCatsFacts] = useState<Fact[]>([]);
  const [isArrayEmpty, SetIsArrayEmpty] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const CAT_URL = 'https://catfact.ninja/fact';

  const getCatPhoto = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(CAT_URL);
      setCatsFacts([...catsFacts, response.data.fact]);
    } catch (error) {
      console.log(error);
    } finally {
      SetIsArrayEmpty(false);
      setIsLoading(false);
    }
  };

  const handleOnInfoClick = () => {
    getCatPhoto();
  };

  const handleOnDeleteInfoClick = () => {
    setCatsFacts([]);
    SetIsArrayEmpty(true);
  };

  const handleOnDeleteFactClick = (indexToRemove: number) => {
    setCatsFacts((prevFacts) => {
      const updatedFacts = [...prevFacts];
      updatedFacts.splice(indexToRemove, 1);
      if(updatedFacts.length===0){
        SetIsArrayEmpty(true);
      }
      return updatedFacts;
    });

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
          {!isArrayEmpty && (
            <Button
              name='DELETE ALLDATA'
              onClick={handleOnDeleteInfoClick}
              disabled={false}
            />
          )}
        </ButtonsContainer>
        {!isArrayEmpty && (
          <InfoContainer>
            {catsFacts.map((fact,index) => (
              <CatsFact
                fact={fact}
                deleteFact={()=>{handleOnDeleteFactClick(index)}}
              />
            ))}
          </InfoContainer>
        )}
      </TaskContainer>
    </Lesson10Container>
  );
}

export default Lesson10;
