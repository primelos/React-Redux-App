import axios from 'axios'

export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';


export const loading = () => ({type: FETCH_LOADING})
export const success = data => ({ type: FETCH_SUCCESS, payload: data})
export const failed = error => ({type: FETCH_FAILED, payload: error})

export const getData = () => dispatch => {

    dispatch({ type: FETCH_LOADING }) 

        // dispatch(loading())
        //return
         axios.get(`https://api.openbrewerydb.org/breweries`)
            .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data}))
            
            // .then(json => dispatch(success(json.results)))  
             .catch(error => dispatch({ type: FETCH_FAILED, payload: error.response}))
    
    
}