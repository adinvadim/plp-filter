'use strict';

import React from 'react';
import block from 'bem-cn';

import './index.css'

var b = block('course-card');

class CourseCard extends React.Component {
  //render() {
    //const props = { ...this.props};
    //return (
      //<div className={b}>
        //<div className={b('image')}>
          //<img src={props.imgUrl} />
        //</div>
        //<div className={b('inner')}>
          //<div className={b('content')}>
            //<div className={b('uni')}>
              //{props.uni}
            //</div>
            //<div className={b('title')}>
              //{props.title}
            //</div>
            //<div className={b('description')}>
              //{props.description}
            //</div>
          //</div>
          //<div className={b('footer')}>
            //Начало 5 августа
          //</div>

        //</div>
      //</div>
    //);
  //}
  render() {
    const { title, description, type, owner, theme, imgUrl } = this.props;
    return (
      <div className={b}>
        <div className={b('image')}>
          <img src={imgUrl} />
        </div>
        <div className={b('inner')}>
          <pre>title : {title}</pre>
          <pre>owner : {owner}</pre>
          <pre>type : {type}</pre>
          <pre>theme : {theme} </pre>
        </div>
      </div>
    )
  }
}

CourseCard.displayName = 'CourseCard';

// Uncomment properties you need
CourseCard.propTypes = {
  title : React.PropTypes.string.isRequired,
  imgUrl : React.PropTypes.string,
  description : React.PropTypes.string,
  uni: React.PropTypes.string,
  type: React.PropTypes.oneOf(['course', 'spec']),
  duration: React.PropTypes.number
};
// CourseComponent.defaultProps = {};

export default CourseCard;
