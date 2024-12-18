import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import { UsersPage } from "./styles";

function Users() {
//хук useNavigate возвращает функцию, при вызове которой нас может перенаправить на указанный url
const navigate = useNavigate();

const goToAboutPage = ()=>{
  navigate('/about');
}

// *Пример useEffect при размонтировании компонента users
//используют при работе кэша
// остановка таймера.. потому что он будет идти если перейдем на другую строницу Interval
useEffect(()=>{
  return ()=>{
    console.log('Наш компонент Users unmounting');
  }
},[])

  return <UsersPage>Content UsersPage
    <Button name="Go to About Page" onClick={goToAboutPage}/>
  </UsersPage>;
}

export default Users;