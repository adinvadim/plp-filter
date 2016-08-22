import React, { Component, PropTypes } from 'react';
import Filter from 'containers/Filter';
import Collection from 'components/Collection';
import { connect } from 'react-redux';

import { getItems } from './actions';

const filterItems = (items, values={}) => {
  console.log('in filterItems', items, values)
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

class FilterCatalog extends Component {

  componentDidMount() {
    this.props.dispatch(getItems(this.props.subcatalog));
  }

  renderCollections(props) {
    const { collections, items, filter } = props;
    console.log('items', items, filter)
    if (items && items.length > 0) {
      return collections.map(item => {
        const filteredItems = filterItems(items, Object.assign({}, item.filter, filter));
        return <Collection items={filteredItems} title={item.title} />
      });
    } else {
      return 'Пустая коллекция'
    }
  }

  render() {
    const { collections, items, filter } = this.props;
    return (
      <div>
        <Filter />
        {this.renderCollections(this.props)}
      </div>
    );
  }
}

FilterCatalog.propTypes = {
  items : PropTypes.array,
  collections : PropTypes.array,
  filter : PropTypes.array
}


function mapStateToProps(state, ownProps) {
  const props = {
    items : state.catalog.items,
    collections : state.catalog.collections,
    filter : state.form && state.form.filter && state.form.filter.values || []
  }
  return props;
}

export default connect(mapStateToProps)(FilterCatalog);
