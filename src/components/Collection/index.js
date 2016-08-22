'use strict';

import React, { Component, PropTypes } from 'react';
import block from 'bem-cn';

import './index.css'

import CourseCard from 'components/CourseCard';
import Filter from 'containers/Filter';

var b = block('collection');


class Collection extends Component {

  renderItems(items=[]) {
    if (items.length > 0) {
      return items.map(item => <CourseCard {...item} />)
    } else {
      return 'Пусто'
    }
  }

  render() {
    const { items, title } = this.props;
    console.log('items', items);
    return (
      <div className={b}>
        <div className={b('title')}>
          {title}
        </div>
        <div className={b('items')}>
            {this.renderItems(items)}
        </div>
      </div>
    );
  }
}

Collection.displayName = 'Collection';

Collection.propTypes = {
  items : PropTypes.array,
};

export default Collection;
