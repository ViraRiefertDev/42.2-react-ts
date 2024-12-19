import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import GlobalStyles from './styles/GlobalStyles';

import About from 'pages/About/About';
import Home from 'pages/Home/Home';
import Users from 'pages/Users/Users';
import Clients from 'pages/Clients/Clients';
import Rolex from 'pages/Clients/components/Rolex/Rolex';
import PatekPhilippe from 'pages/Clients/components/PatekPhilippe/PatekPhilippe';
import AudemarsPiguet from 'pages/Clients/components/AudemarsPiguet/AudemarsPiguet';
import Homework11 from 'homeworks/Homework11/Homework11';

//lessons
/* import Lesson06 from './lessons/lesson06/Lesson06'; */
/* import Lesson07 from './lessons/lesson07/Lesson07'; */
/* import Lesson08 from './lessons/Lesson08/Lesson08'; */
/* import Lesson09 from './lessons/Lesson09/Lesson09'; */
/* import Lesson10 from './lessons/Lesson10/Lesson10'; */
/* import Lesson11 from 'lessons/Lesson11/Lesson11'; */
import Lesson13 from 'lessons/Lesson13/Lesson13';
import User from 'pages/Users/components/User/User';

//homeworks
/* import Homework07 from 'homeworks/Homework07/Homework07'; */
/* import Homework08 from 'homeworks/Homework08/Homework08'; */
/* import Homework09 from 'homeworks/Homework09/Homework09'; */
/* import Homework11 from 'homeworks/Homework11/Homework11'; */

//homeworks
/* import Homework07 from './homeworks/Homework07/Homework07';*/
/* import HW09Lesson from './homeworks/Hw09Lesson/Hw09Lesson'; */

//consultations
/* import Consultation04 from './consultations/Consultation04/Consultation04'; */
/* import Consultation05 from './consultations/Consultation05/Consultation05'; */

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/users' element={<Users/>}/>
          {/* Пример консультации 7 Гибкий линк*/}
          {/* В url добавляется параметр id(переменная) - синтаксис :id */}
          <Route path='/users/:id' element={<User/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path = '/homework11' element={<Homework11/>}/>
          <Route path='/clients/rolex' element={<Rolex/>}/>
          <Route path = '/clients/patekPhilippe' element={<PatekPhilippe/>}/>
          <Route path='/clients/audemarsPiguet' element={<AudemarsPiguet/>}/>
          <Route path='/lesson13' element={<Lesson13/>}/>

           {/* * если не найдем страницу делаем специальную страницу NotFound */}
          {/* <Route path='*' element={<PageNotFound/>} */}
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

{
  /* <Lesson07/> */
}
{
  /* <Lesson06/> */
}
{
  /* <Lesson07/> */
}
{
  /* <Consultation04/> */
}
{
  /* <Homework07/> */
}
{
  /* <Lesson08/> */
}
{
  /* <Homework08/> */
}
{
  /* <Lesson09/> */
}
{
  /* <Homework09/> */
}
{
  /* <Consultation05/> */
}
{
  /* <HW09Lesson/> */
}
{
  /* <Lesson10/> */
}
{
  /* <Lesson11 /> */
}
{
  /* <Homework11/> */
}
export default App;
