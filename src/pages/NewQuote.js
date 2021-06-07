import React , {useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import {addQuote} from '../lib/api';

function NewQuote() { // http req hooks 사용
    const history = useHistory();
    const {sendRequest,status,error} = useHttp(addQuote);
    
    const addQuoteHandler = (quoteInfo) => {
        sendRequest(quoteInfo);
    };
    
    useEffect(()=>{
        if(status ==='completed'){
            history.push('/quotes');
        }
    },[status]);
    
    return (
      <QuoteForm onAddQuote={addQuoteHandler} isLoading = { status==='pending' } ></QuoteForm>    
    )
}

export default NewQuote

 
