import { useParams } from "react-router-dom";

import GoBackButton from "components/GoBackButton/GoBackButton";
import { UserInfo, UserPage, UserTitle } from "./styles";
function User() {
  //хук useParams возвращает объект с параметрами из url
  const {id} = useParams();

  // при загрузке страницы отправляется запрос на сервер для получения данных определенного пользователя
  // пример данных, пришедших с сервера для пользователя с id 1
  const data = {
    id:2,
    name: 'Bob Smith',
    job_title: 'Manager'
  }
  return (
    <UserPage>
      <UserTitle>User Page</UserTitle>
      <UserInfo>Здесь отображается информация о пользователе с id: {id}</UserInfo>
      <UserInfo>{data.name}</UserInfo>
      <UserInfo>{data.job_title}</UserInfo>
      <GoBackButton />
    </UserPage>
  )
}
export default User;