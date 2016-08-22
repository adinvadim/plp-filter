import React from 'react';
import Filter from 'containers/Filter';
import Collection from 'components/Collection';
import { connect } from 'react-redux';

import { getItems } from './actions';

class FilterCatalog extends React.Component {

  componentDidMount() {
    this.props.dispatch(getItems(this.props.subcatalog));
  }

  render() {
    const { collections, items } = this.props;
    return (
      <Filter />
      { collections.map(item => {
        return <Collection items={filterItems(items)}
      })}
      <Collection items={this.props.items} filter={}/>
    );
  }
}

FilterBox.propTypes = {
  subcatalog : React.PropTypes.string
}


function mapStateToProps(state, ownProps) {
  const props = {
    items : state.catalog.items,
    collections : state.catalog.collections,
    filter : state.form.filter.value
  }
}

export default connect(mapStateToProps)(FilterCatalog);
