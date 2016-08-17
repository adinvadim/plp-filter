import React, { PropTypes } from 'react';

import block from 'bem-cn';

const b = block('checkbox');

class Checkbox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      checked: this.props.checked || false
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({checked : e.target.checked})
    this.props.onChange(e)
  }

  handleFocus(e) {
    this.setState({focus : true});
    this.props.onFocus(e);
  }

  handleBlur(e) {
    this.setState({focus : false});
    this.props.onBlur(e);
  }

  render() {
    const props = { ...this.props };
    const checked = this.state.checked;
    return (
      <label className={b({ checked, disabled : props.disabled})} style={props.style}>
        <span className={b('control')}>
          <input
            type={props.type}
            name={props.name}
            checked={checked}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={props.value}
          />
        </span>
        { props.label && <span className={b('text')}> {props.label} </span>}
      </label>
    )
  }
}

Checkbox.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}

Checkbox.defaultProps = {
  disabled: false,
  type: 'checkbox',
  defaultChecked: false,
  onChange() {},
  onFocus() {},
  onBlur() {}
}

Checkbox.contextTypes = {
  checkboxGroup: PropTypes.object
}


export default Checkbox;
