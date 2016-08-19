import React, { Component, } from 'react';
import { connect } from 'react-redux';

import FilterCollection from 'containers/FilterCollection'
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="index">
        <div className="notice">Фильтрация курсов</div>
        <FilterCollection filter={this.props.filter}/>
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
