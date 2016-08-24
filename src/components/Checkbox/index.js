import React, { PropTypes } from 'react';

import block from 'bem-cn';

const b = block('checkbox');

class Checkbox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };

  }


  render() {
    const props = this.props;
    const checked = props.checked;
    return (
      <label className={b({ checked, disabled : props.disabled})} style={props.style}>
        <span className={b('control')}>
          <input
            type={props.type}
            name={props.name}
            checked={checked}
            onChange={this.props.onChange}
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
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

Checkbox.defaultProps = {
  disabled: false,
  type: 'checkbox',
  onChange() {},
}


export default Checkbox;
