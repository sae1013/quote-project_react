import dotenv from 'dotenv';
dotenv.config()

const FIREBASE_DOMAIN = process.env.REACT_APP_FIREBASE_DOMAIN;

export async function getAllQuotes() {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
    if(!response.ok){
        throw new Error('Could not fetch quotes'); 
    }
    const data = await response.json();
    const loadedQuote = []
    
    for(const key in data){
        loadedQuote.push({
            id:key,
            ...data[key]
        })
    }
    return loadedQuote;
    
};

export async function getSingleQuote(quoteId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
    if(!response.ok){
        return new Error('Fetch failure');
    }
    const data = await response.json();
    const loadedQuote = {
        id:quoteId,
        ...data
    }
    return loadedQuote
};


export async function addQuote(quoteData){
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`,{
        method:'POST',
        body: JSON.stringify(quoteData),
        headers: {
            'Content-Type':'application/json'
        }
    });
    if(!response.ok){
        return new Error('postRequest Failure');
    }
    const data = await response.json();
    return null
}

export async function getAllComments(quoteId){
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
    if (!response.ok) {
        throw new Error('Could not get comments.');
      }
    
    const data = await response.json();
    const loadedComments = [];
    for(const key in data){
        loadedComments.push({
        id:key,
        ...data[key]
        });
    }
    return loadedComments;
}

export async function addComment(requestData){
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
        method: 'POST',
        body: JSON.stringify(requestData.commentData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(!response.ok){
          throw new Error('postRequest Error');
      }
    const data = await response.json();
    return null
}