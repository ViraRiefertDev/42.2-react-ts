import Message from "../Message/Message";
import { CardContainer, UserName } from "./styles";

function Card(){
  return(
    <CardContainer>
      <UserName>Vera Riefert</UserName>
      <Message/>
    </CardContainer>
  )
}

export default Card;