import { ChangeEvent, useState } from 'react';

import { Lesson08Container, GreenBox, BlueBox, InputExample } from './styles';
import Counter from '../../components/Counter/Counter';

function Lesson08() {
  //------Поднятие состояния
  // Поднятие состояния для компонента Counter, для более гибкой работы с компонентами. в итоге можно будте создавать разные состояния для Counter, внутри его родительских компонентов
  const [count, setCount] = useState<number>(0);

  const onPlusClick = (): void => setCount((prevValue) => prevValue + 1);

  const onMinusClick = (): void => setCount((prevValue) => prevValue - 1);
  //-------------------
  //Состояние для хранения значения input (только одного)
  const [inputValueExample, setInputValueExample] = useState<string>(' ');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>)=>{
    setInputValueExample(event.target.value);
  }

  return (
    <Lesson08Container>
      //Контролируемые и неконтролируемые компоненты
      <InputExample name='example1' placeholder='example text' onChange={onChangeInput} value={inputValueExample}/>
      //поднятие состояния
      <Counter
        countValue={count}
        onPlusClick={onPlusClick}
        onMinusClick={onMinusClick}
      />
      //Emotion (шаблоны)
      <GreenBox>Green Box</GreenBox>
      <BlueBox>Blue Box</BlueBox>
    </Lesson08Container>
  );
}
export default Lesson08;
