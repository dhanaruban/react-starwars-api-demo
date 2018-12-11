import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';

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
            <li>{ item.name }</li>
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

const mapDispatchToProps = dispatch => {
  return {
    getPeople: () => dispatch({ type: 'GET_PEOPLE' }),
    getPlanets: () => dispatch({ type: 'GET_PLANETS' }),
    getStarships: () => dispatch({ type: 'GET_STARSHIPS' })
  }
};

export { _App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_App);
