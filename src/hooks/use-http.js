import React,{useCallback,useReducer} from 'react';

//Reducer Definition
const httpReducer = (state,action) => {
    if(action.type === 'SEND'){
        return {
            data:null,
            error:null,
            status: 'pending'
        }
    }
    if(action.type ==='SUCCESS'){
        return {
            data: action.payload,
            error:null,
            status:'completed'
        }
    }
    if(action.type ==='ERROR'){
        return {
            data:null,
            error:action.payload,
            status:'completed'
        }
    }
};


const useHttp = (reqFunction,startWithPending) => {
    const [state,dispatch] = useReducer(httpReducer,{
        status: startWithPending ? 'pending':null,
        data: null,
        error: null
    });

    const sendRequest = useCallback(async(reqParam)=>{
        dispatch({type:'SEND'});
        try{
            const responseData = await reqFunction(reqParam); 
            dispatch({type:'SUCCESS',payload:responseData});
        } catch(err){
            dispatch({
                type:'ERROR',payload: (err.message || 'something went wrong')
            });
        }
    },[reqFunction])


    return {
        ...state,sendRequest
    }
}
export default useHttp;

