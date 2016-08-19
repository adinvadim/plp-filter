'use strict';

import React from 'react';
import block from 'bem-cn';

import './index.css'

import CourseCard from 'components/CourseCard';
import Filter from 'containers/Filter';

var b = block('collection');

class Collection extends React.Component {
  render() {
    let items = (this.props.items || []).map(item => {
        return (
            <CourseCard {...item}/>
        );
      })
    return (
      <div className={b}>
      { this.props.filter && (<Filter filter={this.props.filter}/>) }
        <div className={b('items')}>
            {items}
        </div>
      </div>
    );
  }
}

Collection.displayName = 'Collection';

// Uncomment properties you need
Collection.propTypes = {
  items : React.PropTypes.array,
};
Collection.defaultProps = {
  isFilter : false
};

export default Collection;
