import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../Input/Input';
import Button from '../Button/Button';
import { LoginFormWrapper, LoginFormTitle, InputsContainer } from './styles';
import { LoginFormValue, LOGIN_FORM_NAMES } from './types';

function LoginForm() {
  //минимум 8 символов, специальный символ и хотя бы одна заглавная буква
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //Проверка чтоб были только буквы латинского алфавита
  const nameRegx = /^[a-zA-Z]+$/;

  //Создаем валидационную схему через Yup
  const schema = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string()
      .email('Field has type email')
      .required('Field email is required')
      .test(
        'Check value length',
        'Max 25 sympols',
        (value) => value.length <= 25
      ),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.string()
      .required('Field password is required')
      .matches(
        passwordRegex,
        'Password must be at least 8 characters long, include upperase, lowercase, number and special character'
      ),
    /* [LOGIN_FORM_NAMES.PASSWORD]: Yup.number()
      .required('Field password is required')
      .typeError('Password must be number')
      .test ('Check min password length', 'Min 10 symbols', (value)=> String(value).length>=10)
      .test ('Check max password length', 'Max 20 sympols', (value)=>String(value).length<=20) */
    [LOGIN_FORM_NAMES.USER_NAME]: Yup.string()
      .required('Field password is required')
      .test(
        'Check min username length',
        'Min 2 and Max 30 symbol',
        (value) => value.length >= 2 && value.length <= 30
      )
      .matches(nameRegx, 'Name must contain only latin letters')
      ,
    //проверка max и min работают с числовыми значениями и они указывают на мин и макс значение в поле (!не количество символов)
    //.max(150, 'Max 150')
    //.min(18, 'Min 18'),
  });

  //настройка формы. Сохраняем возвращаемое useFormik значение (объект) в переменную formik
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: '',
      [LOGIN_FORM_NAMES.PASSWORD]: '',
      [LOGIN_FORM_NAMES.USER_NAME]: '',
    } as LoginFormValue,
    //привязка валидационной схемы Yup к формику формы LoginForm
    validationSchema: schema,
    validateOnChange: false,
    /* validateOnMount:true, */
    onSubmit: (values: LoginFormValue) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login form</LoginFormTitle>
      <InputsContainer>
        <Input
          name={LOGIN_FORM_NAMES.USER_NAME}
          id='user_name'
          placeholder='Enter your username'
          label='Name'
          value={formik.values[LOGIN_FORM_NAMES.USER_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.USER_NAME]}
        />
        <Input
          name={LOGIN_FORM_NAMES.EMAIL}
          id='user_email'
          /* type='email' */
          placeholder='Enter your email'
          label='Email'
          value={formik.values[LOGIN_FORM_NAMES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <Input
          name={LOGIN_FORM_NAMES.PASSWORD}
          id='user_password'
          /* type='password' */
          placeholder='Enter your password'
          label='Password'
          value={formik.values[LOGIN_FORM_NAMES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </InputsContainer>
      <Button name='Login' type='submit' />
    </LoginFormWrapper>
  );
}

export default LoginForm;
