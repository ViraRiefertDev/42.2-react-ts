import { InputLabel, InputContainer,InputEl} from './styles';
import { IInputProps } from './types';

function Input({ name, type = 'text', placeholder, label, id,value,onChange }: IInputProps) {
  return (
    <InputContainer>
      {label && (
        <InputLabel htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <InputEl id={id} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </InputContainer>
  );
}

export default Input;
