import React, { Component, } from 'react';
import { connect } from 'react-redux';
import FilterCatalog from 'containers/FilterBox';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="index">
        <div className="notice">Фильтрация курсов</div>
        <FilterCatalog subcatalog='bus'/>
      </div>
    )
  }
}

App.propTypes = {
  //items: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  const props = {
    filter : state.form.filter.values
  }
}


export default connect()(App);
