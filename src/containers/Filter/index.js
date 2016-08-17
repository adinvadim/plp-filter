import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';

import block from 'bem-cn';

import CheckboxGroup from 'components/CheckboxGroup';
import Checkbox from 'components/Checkbox';


const  { DOM: { input, select, textarea } } = React


const b = block('filter');



const renderCheckboxGroup = props => {
  return (
    <CheckboxGroup
      {...props}
      onChange={props.input.onChange}
    />
  )
}

const renderCheckbox = props => {
  return (
    <Checkbox
      {...props}
      onChange={props.input.onChange}
      onFocus={props.input.onFocus}
      onBlur={props.input.onBlur}
    />
  )
}

class Filter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { filter } = this.props;
    return (
        <form onChange={(e) => {
        }}>
          <div>
            <Field component={renderCheckbox} type="checkbox" name="new" label="Новые" />
          </div>
          <br />
          <div>
            <label>Выберите тип:</label>
            <Field
              component={renderCheckboxGroup}
              name="type"
              options={[
                { label : 'Курс', value : 'course' },
                { label : 'Спец', value : 'spec'}
              ]}
            />
          </div>
          <br />
          <div>
            <Field type="text" component="input" name="q" placeholder="Поиск"/>
          </div>

        </form>
    );
  }

}


Filter = reduxForm({
  form : 'filter'
})(Filter);

export default Filter
