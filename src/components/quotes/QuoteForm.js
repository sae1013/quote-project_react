import React,{ useRef,useState,useEffect } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  
  const [isEntered,setIsEntered] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    
    if(enteredAuthor.trim() != '' && enteredText.trim() != ''){
      props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }
    
  };

  const formFocusedHandler = () => {
    
    setIsEntered(true);
  };

  const finishEnteringHandler = () => {
    setIsEntered(false);
  };
  return (
    <React.Fragment>
      <Prompt when = {isEntered} message = {(location)=>'뒤로 가시겠습니까? 데이터는 삭제됩니다.'}></Prompt>
      <Card>
        <form className={classes.form} 
              onSubmit={submitFormHandler}
              onFocus={formFocusedHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn' onClick={finishEnteringHandler}>Add Quote</button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default QuoteForm;
