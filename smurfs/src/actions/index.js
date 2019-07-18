import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_SUCCESS';
export const SMURF_ADDED = 'SMURF_ADDED';
export const SMURF_DELETED = 'SMURF_DELETED'

export const addSmurf = smurf => dispatch =>{
  axios
    .post('http://localhost:3333/smurfs',smurf)
    .then(res =>dispatch({type:SMURF_ADDED, payload:res.data}))
    .catch(err=>dispatch({type:FETCH_ERROR,payload:err}))
}

export const getSmurfs = smurf => dispatch =>{
  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>dispatch({type:FETCH_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:FETCH_ERROR,payload:err}))
}

export const updateSmurf = (id,smurf)=> dispatch =>{
  axios
    .put(`http://localhost:3333/smurfs/${id}`,smurf)
    .then(res =>dispatch({type:FETCH_SUCCESS, payload:res.data}))
    .catch(err=>dispatch({type:FETCH_ERROR,payload:err}))
}

export const deleteSmurf = id => dispatch =>{
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res =>dispatch({type:SMURF_DELETED, payload:res.data}))
    .catch(err=>dispatch({type:FETCH_ERROR,payload:err}))
}

