import styled from '@emotion/styled';
import bgcats from '../../assets/bgcats2.png';

export const Lesson10Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  background: url(${bgcats}) repeat 0 0/200px 150px;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: start;
  align-items: center;
  width: 740px;
  min-height: 100vh;
  padding: 20px;
  background-color: white;
`;

export const Title = styled.h1`
  color: blue;
  border: 2px solid blue;
  border-radius: 30px;
  padding: 10px;
  font-size: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 500px;
  height: 70px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  background-color: lightgray;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 700px;
  width: 100%px;
  padding: 10px;
  border: 2px solid #a3c8f0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 10px rgba(163, 200, 240, 0.5);
  overflow-y: auto;
`;
