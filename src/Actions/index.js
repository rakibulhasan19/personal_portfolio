
import {
    FETCH_DATA
} from './types'
import Api from "../Api";


export const fetchData = payload => async dispatch =>{
    const response = await Api.get('home/',payload);
    dispatch({ type:FETCH_DATA,payload:response.data})
}