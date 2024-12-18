import { useState, createContext } from 'react';

import Section from '../Section/Section';
import { MainCardTitle, MainCardWrapper } from './styles';
import { UserData } from './types';

//* Шаг 1. Создаем хранилище - контекст с помощью функции createContext
// Необходимо сделать экспорт, чтобы затем использовать контекст с хуком useContext
// Контекст перерендеривать не надо поэтому мы создаем его вне компонента
export const MainCardContext = createContext<UserData>({
  firstName: '',
  lastName: '',
  age: 0,
});

function MainCard() {
  const [userData, setUserData] = useState<UserData>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 11,
  });

  return (
    //2 шаг. Создаём обертку, которая позволит получить значение из контекста в любом компоненте,
    //который будет вложен в обёртку
    // В провайдере мы добавляем значение, к которому нужен доступ (userData)
    <MainCardContext.Provider value={userData}>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        {/* Пример с props drilling */}
        {/* <Section data={userData} /> */}
        <Section/>
      </MainCardWrapper>
    </MainCardContext.Provider>
  );
}
export default MainCard;
