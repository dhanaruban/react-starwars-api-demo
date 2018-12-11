import xhr from './xhr';
const BASE = 'https://swapi.co/api/';

const getPeople = () => xhr(`${BASE}people`);

const getPlanets = () => xhr(`${BASE}planets`);

const getStarships = () => xhr(`${BASE}starships`);

export { getPeople, getPlanets, getStarships };
