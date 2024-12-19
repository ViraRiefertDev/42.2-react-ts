import { ChangeEvent, useState,createContext } from 'react';
import Button from 'components/Button/Button';
import { BlogManagementContainer, TextArea, ButtonWrapper } from './styled';
import Card from '../Card/Card';

export const PostMessage = createContext<string>('');

function BlogManagement() {
  const [textareaValue, setTextareaValue] = useState<string>('');
  const [postData, setPostData] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  const handleOnClick = ()=>{
    setPostData(textareaValue);
  }

  return (
    <PostMessage.Provider value={postData}>
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
        {postData && <Card/>}
      </BlogManagementContainer>
    </PostMessage.Provider>
  );
}

export default BlogManagement;
