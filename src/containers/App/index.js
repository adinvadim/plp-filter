import React, { Component, } from 'react';
import { connect } from 'react-redux';

import FilterCollection from 'containers/FilterCollection'
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="index">
        <div className="notice">Фильтрация курсов</div>
        <FilterCollection isFilter={true}/>
      </div>
    )
  }
}

App.propTypes = {
  //items: PropTypes.object.isRequired
};


export default connect(null)(App);
