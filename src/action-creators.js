import { getPeople, getPlanets, getStarships } from './sw-service';

export function GET_PEOPLE() {
  return dispatch => {
    dispatch({ type: 'SET_LOADING', value: true });
    return getPeople().then(res => {
      dispatch({ type: 'SET_LIST', value: res.results });
    });
  }
}

export function GET_PLANETS() {
  return dispatch => {
    dispatch({ type: 'SET_LOADING', value: true });
    return getPlanets().then(res => {
      dispatch({ type: 'SET_LIST', value: res.results });
    });
  }
}
			
export function GET_STARSHIPS() {
  return dispatch => {
    dispatch({ type: 'SET_LOADING', value: true });
    return getStarships().then(res => {
      dispatch({ type: 'SET_LIST', value: res.results });
    });
  }
}
