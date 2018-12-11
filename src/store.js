import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getPeople, getPlanets, getStarships } from './sw-service';

const initialState = {
  loading: false,
  list: []
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_LOADING':
      return Object.assign({}, state, {
        loading: action.value
      })
      
    case 'SET_LIST':
      return Object.assign({}, state, {
        loading: false,
        list: action.value
      })

    case 'GET_PEOPLE':
      return dispatch => {
        dispatch({ type: 'SET_LOADING', value: true });
        return getPeople().then(res => {
          dispatch({ type: 'SET_LIST', value: res.results });
        });
      }

    case 'GET_PLANETS':
      return dispatch => {
        dispatch({ type: 'SET_LOADING', value: true });
        return getPlanets().then(res => {
          dispatch({ type: 'SET_LIST', value: res.results });
        });
      }

    case 'GET_STARSHIPS':
      return dispatch => {
        dispatch({ type: 'SET_LOADING', value: true });
        return getStarships().then(res => {
          dispatch({ type: 'SET_LIST', value: res.results });
        });
      }
      
    default:
      return state;
  }
};

export default createStore(reducer, initialState, applyMiddleware(thunk));
