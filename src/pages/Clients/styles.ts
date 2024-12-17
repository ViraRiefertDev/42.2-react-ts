import styled from "@emotion/styled";


export const ClientsList = styled.ul`
  display: flex;
  gap:15px;
  justify-content: center;
  align-items: center;
  height:100%;
  list-style: none;

`;

export const ClientLink = styled.li`
  cursor: pointer;
  a {
    text-decoration: none;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 20px;
    color: #333; 
    padding: 10px 20px;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #d4af37; 
      border-color: #d4af37;
      background: #fef8e8; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
`;
