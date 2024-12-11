import styled from "@emotion/styled";

export const FactContainer = styled.div`
display: flex;
justify-content:space-around;
`

export const Fact = styled.p`
font-size: 20px;
font-style: italic;
width:500px;

&::before {
    content: '';
    display: inline-block;
    width: 8px; 
    height: 8px;
    background-color: black; 
    border-radius: 50%; 
    margin-right: 8px; 
    vertical-align: middle;
    transform: translateY(-3px);
} 
`;

export const ButtonWrapper = styled.div`
  
`;

export const Line = styled.img`
width:100%`;