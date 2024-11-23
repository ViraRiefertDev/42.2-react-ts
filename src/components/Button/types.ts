export interface IButtonProps{
  name:string;
  type?:'submit'| 'button' | 'reset';
  onClick: () => void;
}