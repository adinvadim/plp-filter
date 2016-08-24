import React, { PropTypes } from 'react';
import Checkbox from 'components/Checkbox'


class CheckboxGroup extends React.Component {

  constructor(props) {
    super(props);

    this._onCheckboxChange = this._onCheckboxChange.bind(this);
  }


  render() {
    const { options, children, name } = this.props;
    const value = this.props.value
    return (
        <div className="checkbox-group">
          {options ? options.map( item => {
            return (
              <Checkbox
                name={name}
                label={item.label}
                value={item.value}
                onChange={this._onCheckboxChange}
                checked={(value.indexOf(item.value) != -1)}
              />
            );
          }) : children}
        </div>
    )
  }

  _onCheckboxChange(e) {
    let newValue;
    if (e.target.checked) {
      newValue = this.props.value.concat(e.target.value);
    } else {
      newValue = this.props.value.filter(v => v !== e.target.value);
    }

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(newValue);
    }
  }


}

CheckboxGroup.defaultProps = {
  Component : "div",
  value : []
}

CheckboxGroup.displayName = 'CheckboxGroup';


export default CheckboxGroup;

