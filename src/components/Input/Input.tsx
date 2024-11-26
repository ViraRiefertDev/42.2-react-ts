import './styles.css';
import { IInputProps } from './types';

function Input({ name, type = 'text', placeholder, label, id }: IInputProps) {
  return (
    <div className='input-wrapper'>
      {label && (
        <label className='input-label' htmlFor={id}>
          {label}
        </label>
      )}
      <input id={id} type={type} name={name} placeholder={placeholder} />
    </div>
  );
}

export default Input;
