import styled from '@emotion/styled';



export const InputLabel = styled.label`
  font-family: Lato, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 25px;
  line-height: 24px;
  color: #6f6f6f;
  font-weight:700;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const InputEl = styled.input`
  width: 300px;
  padding: 20px 20px 20px 5px;
  border: 1px solid #000;
  border-radius: 4px;
  font-size:30px;
  padding-left:15px;

  
  &::placeholder {
    font-family: Lato, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 25px;
    line-height: 24px;
    color: #1e1e1e;
    opacity: 40%;
  }
`;


