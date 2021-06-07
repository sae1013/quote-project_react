import { Fragment,useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes,ascending) => {
  return quotes.sort((A,B)=>{
    if(ascending){
      return A.id > B.id ? 1 : -1;
    }else {
      return A.id < B.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') ==='asc';
  const sortedQuotes = sortQuotes(props.quotes,isSortingAscending);
  

  const changeSortingHandler = ()=> {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`
    });
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick = {changeSortingHandler}>Sort {isSortingAscending ? 'Desc':'Asc'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
