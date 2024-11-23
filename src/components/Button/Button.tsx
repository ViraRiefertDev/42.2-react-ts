import './styles.css';
import { IButtonProps } from './types';

function Button({name,type = 'button', onClick }:IButtonProps) {
  return (
    <button onClick={onClick} className='main-button' type={type}>{name}</button>
  );
}

export default Button;
