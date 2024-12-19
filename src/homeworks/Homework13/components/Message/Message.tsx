import { useContext } from "react";
import { MessageWrapper } from "./styles";
import { PostMessage } from "../BlogManagement/BlogManagement";

function Message(){
  const userMessage = useContext(PostMessage);
  
  return(
    <MessageWrapper>
      {userMessage}
    </MessageWrapper>
  )
}

export default Message;

