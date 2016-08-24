import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { changeFilter, changesFilter } from './actions';

import block from 'bem-cn';

import CheckboxGroup from 'components/CheckboxGroup';
import Checkbox from 'components/Checkbox';
import Chosen from 'components/Chosen';


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
  const { input, label } = props;
  return (
    <Checkbox
      {...props}
      label={label}
    />
  )
}

const Field = props => {
  const { children, ...rest } = props;
  return (
      <div className="form-field">
        {children(...rest)}
      </div>
  )
}

class Filter extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.changesFilter({
      new : false,
      type : []
    })
  }

  render() {
    const { filter, changeFilter } = this.props;
    return (
        <form onChange={(e) => {
        }}>

          <Checkbox name="new" label="Новые" checked={filter.new} onChange={(e) => (changeFilter('new', e.target.checked))}/>
          <br />

          <label>Выберите тип:</label>
          <CheckboxGroup name="type" options={[
              { label : 'Курс', value : 'course' },
              { label : 'Спец', value : 'spec'}
            ]}
            value={filter.type}
            onChange={(e)=>(changeFilter('type', e))}
          />

          <Chosen width="200px" name="theme" onChange={(val) => changeFilter('theme', val)} data-placeholder="Тема" multiple>
            <option value="genetic">Генетика</option>
            <option value="genomika">Геномика</option>
            <option value="js">JS</option>
          </Chosen>


        </form>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
    filter : state.catalog.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeFilter : (name, value) =>  dispatch(changeFilter(name, value)),
    changesFilter : (filter) => dispatch(changesFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
