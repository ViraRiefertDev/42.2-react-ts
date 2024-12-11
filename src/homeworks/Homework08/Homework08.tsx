import { ChangeEvent, useState } from 'react';
import Button from '../../components/Button/Button';
//
import Input from 'components/Input/Input';
import {
  Title,
  HW08Container,
  InputsContainer,
  Block1,
  Block2,
  BlocksContainer,
} from './styles';
import { useStateProps } from './types';

function Homework08() {
  const [data, setData] = useState<useStateProps>({
    firstName: '',
    secondName: '',
  });

  const [showBlocks, setShowBlocks] = useState<boolean>(false);

  const isButtonDisabled = !data.firstName.trim() || !data.secondName.trim();

  function handleButtonOnClick():void {
    //! реализация toggle для кнопки
    setShowBlocks(!showBlocks);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    setShowBlocks(false);
  }

  return (
    <HW08Container>
      <Title>Homework08</Title>
      <InputsContainer>
        <Input
          name='firstName'
          placeholder='Enter your first name'
          label='First Name'
          id='#firstname'
          value={data.firstName}
          onChange={handleInputChange}
        />
        <Input
          name='secondName'
          placeholder='Enter your second name'
          label='Second Name'
          id='#secondname'
          value={data.secondName}
          onChange={handleInputChange}
        />
      </InputsContainer>
      <Button
        disabled={isButtonDisabled}
        name='Show Name!'
        buttonWidth='300px'
        onClick={handleButtonOnClick}
      />
      <BlocksContainer disabled={showBlocks}>
        <Block1>{data.firstName}</Block1>
        <Block2>{data.secondName}</Block2>
      </BlocksContainer>
    </HW08Container>
  );
}

export default Homework08;
