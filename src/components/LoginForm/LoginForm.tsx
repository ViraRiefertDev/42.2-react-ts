import './styles.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

function LoginForm() {
  return (
    <form className='login-form-wrapper' method='POST'>
      <h4 className='login-form-title'>Login form</h4>
      <div className='inputs-container'>
        <Input
          name='email'
          id='user_email'
          type='email'
          placeholder='Enter your email'
          label='Email'
        />
        <Input
          name='password'
          id='user_password'
          type='password'
          placeholder='Enter your password'
          label='Password'
        />
      </div>
      <Button name='Login' type='submit' onClick={()=>{''}} />
    </form>
  );
}

export default LoginForm;
