import { ChangeEvent, useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import { DogImage, DogImageWrapper, Homework09Container, ImputsContainer, ResultContainer } from './styles';
import axios from 'axios';

function Homework09() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [emptyInput, setEmptyInput] = useState<string>('');
  const [dog, setDog] = useState<string>('');

  const searchOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmptyInput(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://dog.ceo/api/breeds/image/random'
      );
      /* console.log(response); */
      setDog(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  return (
    <Homework09Container>
      <ImputsContainer>
        <Input
          name='dog'
          type='text'
          placeholder='show new dog'
          value={searchValue}
          onChange={searchOnChange}
        />
        <Input
          name='emptyInput'
          type='text'
          placeholder='empty input'
          value={emptyInput}
          onChange={handleInputOnChange}
        />
      </ImputsContainer>
      <ResultContainer>
        <DogImageWrapper>
          <DogImage src={dog}></DogImage>
        </DogImageWrapper>
      </ResultContainer>
    </Homework09Container>
  );
}

export default Homework09;
