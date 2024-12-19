import { useContext } from 'react';
import { MessageWrapper } from './styles';
import { PostMessage } from '../BlogManagement/BlogManagement';
import Button from 'components/Button/Button';

function Message() {
  const { message, onPostChange } = useContext(PostMessage);

  const onDeleteMessage = () => {
    onPostChange('');
  };

  return (
    <MessageWrapper>
      {message}
      <Button name='Delete' onClick={onDeleteMessage} />
    </MessageWrapper>
  );
}

export default Message;
