import { css } from '@emotion/react';
import styled from '@emotion/styled';

const blockStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border: 2px solid blue;
  border-radius: 30px;
  font-size: 50px;
`;

export const HW08Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 60px;
  color: blue;
`;

export const InputsContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const BlocksContainer = styled.div<{ disabled: boolean }>`
  display: flex;
  gap: 30px;
  opacity:${({ disabled }) => (disabled ? '100%' : '0%')};
`;

export const Block1 = styled.div`
  ${blockStyles}
  
  background-color: lightblue;
`;

export const Block2 = styled.div`
  ${blockStyles}
 
background-color: lightcoral
`;
