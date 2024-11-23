import './styles.css';
import Button from '../Button/Button';
import { useState } from 'react';

function Feedback() {
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);

  const onLikeClick = (): void => {
    setLikesCount((prevValue: number) => prevValue + 1);
  };

  const onDislikeClick = (): void => {
    setDislikesCount((prevValue: number) => prevValue + 1);
  };

  const onResetResultClick = ():void => {
    setLikesCount(0);
    setDislikesCount(0);
  };
  return (
    <div className='feedback-container'>
      <div className='buttons-container'>
        <div className='button-like-wrapper'>
          <span className='likes-count'>{likesCount}</span>
          <Button onClick={onLikeClick} name='👍 Like' />
        </div>
        <div className='button-dislike-wrapper'>
          <Button onClick={onDislikeClick} name='👎 Dislike' />

          <span className='dislikes-count'>{dislikesCount}</span>
        </div>
      </div>
      {(likesCount || dislikesCount) > 0 && (
        <div className='reset-result-wrapper'>
          <Button onClick={onResetResultClick} name='Reset Result'/>
        </div>
      )}
    </div>
  );
}

export default Feedback;
