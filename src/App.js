import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {GET_PEOPLE, GET_PLANETS, GET_STARSHIPS} from './action-creators';

const _App = ({ loading, list, getPeople, getPlanets, getStarships }) => {
  const [ filterText, setFilterText ] = useState('');
  const filteredList = list.filter(item =>
    ~item.name.toLowerCase().indexOf(filterText.toLowerCase())
  );

  return (
    <div id="app">
      <h1>Star Wars API Demo</h1>

      <div className="spacing">
        <button className="inline" onClick={getPeople}>Get People</button>
        <button className="inline" onClick={getPlanets}>Get Planets</button>
        <button className="inline" onClick={getStarships}>Get Starships</button>
      </div>

      <div className="spacing">
        <input placeholder="Filter" onInput={(e) => setFilterText(e.target.value)}/>
      </div>

      { loading &&
        <div className="spacing" v-if="loading">Loading...</div>
      }

      { !loading &&
        <ul className="spacing">
          { filteredList.map(item =>
            <li key={item.name}>{ item.name }</li>
          )}
        </ul>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    list: state.list || []
  }
};

const mapDispatchToProps = {
    getPeople: GET_PEOPLE,
    getPlanets: GET_PLANETS,
    getStarships: GET_STARSHIPS
  }

export { _App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_App);
