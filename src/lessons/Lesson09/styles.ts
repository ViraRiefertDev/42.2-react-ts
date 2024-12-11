import styled from '@emotion/styled';


export const Lesson09Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex: 1;
`;

export const GreenBox = styled.div`
  background: #aed4b3;
  color: #1e5926;
`;

export const BlueBox = styled.div`
  background: #a4dadb;
  color: #235354;
`;
export const InputExample = styled.input`
  width: 200px;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  &::placeholder {
    color: #a19f9f;
  }
  `
