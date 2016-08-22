import React, { PropTypes } from 'react';
import Checkbox from 'components/Checkbox'


class CheckboxGroup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.value
    }

    this._onCheckboxChange = this._onCheckboxChange.bind(this);
  }


  render() {
    const { options, children, name } = this.props;
    const value = this.state.value
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
      newValue = this.state.value.concat(e.target.value);
    } else {
      newValue = this.state.value.filter(v => v !== e.target.value);
    }

    this.setState({value: newValue});

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(newValue);
    }
  }


}

CheckboxGroup.propTypes = {

  name: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.array,
  value: PropTypes.array,
  onChange: PropTypes.func,

}

CheckboxGroup.defaultProps = {
  Component : "div",
  value : []
}

CheckboxGroup.displayName = 'CheckboxGroup';


export default CheckboxGroup;

