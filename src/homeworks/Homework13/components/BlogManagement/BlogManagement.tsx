import { ChangeEvent, useState, createContext } from 'react';
import Button from 'components/Button/Button';
import { BlogManagementContainer, TextArea, ButtonWrapper } from './styled';
import Card from '../Card/Card';
import { MessagePostContext } from './types';

// 1 Вариант - без кнопки delete у компонента Message
//export const PostMessage = createContext<string>('');

// 1 Вариант - c кнопкой delete у компонента Message
//можно и как jeneric типизироват и как as
// если передаем саму функция изменения состояния не в обертке, то типизировать ее надо особо, тут Dispatch<SetStateAction<string>>
export const PostMessage = createContext({
  message: '',
  onPostChange: () => {},
} as MessagePostContext);

function BlogManagement() {
  const [textareaValue, setTextareaValue] = useState<string>('');
  const [postData, setPostData] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  const handleOnClick = () => {
    setPostData(textareaValue);
    setTextareaValue('');
  };

  return (
    <PostMessage.Provider
      value={{
        message: postData,
        onPostChange: setPostData,
      }}
    >
      <BlogManagementContainer>
        <TextArea
          rows={10}
          cols={50}
          value={textareaValue}
          onChange={handleChange}
          placeholder='Enter your message'
        ></TextArea>
        <ButtonWrapper>
          <Button name='Post' onClick={handleOnClick} />
        </ButtonWrapper>
        {postData && <Card />}
      </BlogManagementContainer>
    </PostMessage.Provider>
  );
}

export default BlogManagement;
