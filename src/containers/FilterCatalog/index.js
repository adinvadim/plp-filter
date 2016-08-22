import React, { Component, PropTypes } from 'react';
import Filter from 'containers/Filter';
import Collection from 'components/Collection';
import { connect } from 'react-redux';

import { getItems } from './actions';

import { filterItems, mergeFilter } from './utils';



class FilterCatalog extends Component {

  componentDidMount() {
    this.props.dispatch(getItems(this.props.subcatalog));
  }

  renderCollections(props) {
    const { collections, items, filter } = props;
    if (items && items.length > 0) {
      return collections.map(item => {
        const filteredItems = filterItems(items, mergeFilter({}, item.filter, filter));
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
  filter : PropTypes.object
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
