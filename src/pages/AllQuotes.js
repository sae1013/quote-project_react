import React,{useState,useEffect} from 'react'
import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import {getAllQuotes} from '../lib/api';


function AllQuotes() {
    useEffect(()=>{
        console.log('allquote()');
    })
    const {sendRequest, status, data, error} = useHttp(getAllQuotes,true);
    useEffect(()=>{
        sendRequest();
    },[sendRequest])

    if(status ==='pending') {
        return (
        <div className='centered'>
            <LoadingSpinner/>
        </div>
        )
    }
    else if(error){
        return <p className='centered focused'>{error}</p>;
    }

    else if(status ==='completed' && !data){
        return <NoQuotesFound/>
    }
    
    else if(status ==='completed' && data.length>0){
        return (
            <QuoteList quotes = {data}/>
        )
    }
    
}

export default AllQuotes

 