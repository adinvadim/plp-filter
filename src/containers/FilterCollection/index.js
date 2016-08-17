import React from 'react';
import { connect } from 'react-redux';
import block from 'bem-cn';

import Collection from 'components/Collection';
import { getItems } from './actions';


const b = block('collection');

const filterItems = (items, values={}) => {
  let result = items;
  if (values.new) {
    result = result.filter( item => item.new )
  }
  if (values.type && values.type.length > 0) {
    result = result.filter(item => values.type.indexOf(item.type) != -1)
  }

  if(values.q) {
    result = result.filter(item => item.title.indexOf(values.q) != -1)
  }
  return result;
}

class FilterCollection extends Collection {

  componentDidMount() {
    this.props.dispatch(getItems());
  }
}


function mapStateToProps(state) {
  const values = state.form && state.form.filter && state.form.filter.values
  const props = {
    items : filterItems(
              state.filterCollection.items,
              values
            ),
  }
  return props;
}


export default connect(mapStateToProps)(FilterCollection);
