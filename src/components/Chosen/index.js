import React, { Component } from 'react';

class Chosen extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    $(this.refs.select).trigger('chosen.updated');
  }

  handleChange(event) {
    this.forceUpdate();
    this.props.onChange && this.props.onChange($(event.target).val());
  }

  componentDidMount() {
    const props = this.props;
    const select = $(this.refs.select);
    $(select)
      .chosen({
        allow_single_deselect: props.allowSingleDeselect,
        disable_search: props.disableSearch,
        disable_search_threshold: props.disableSearchThreshold,
        enable_split_word_search: props.enableSplitWordSearch,
        inherit_select_classes: props.inheritSelectClasses,
        max_selected_options: props.maxSelectedOptions,
        no_results_text: props.noResultsText,
        placeholder_text_multiple: props.placeholderTextMultiple,
        placeholder_text_single: props.placeholderTextSingle,
        search_contains: props.searchContains,
        single_backstroke_delete: props.singleBackstrokeDelete,
        width: props.width,
        display_disabled_options: props.displayDisabledOptions,
        display_selected_options: props.displaySelectedOptions
      })
      .on('chosen:maxselected', this.props.onMaxSelected)
      .change(this.handleChange);
  }

  componentWillUnmount() {
    $(this.refs.select).off('chosen:maxselected change');
  }

  render() {
    const selectProps = Object.assign({}, this.props, {ref: "select"});
    return <select {...selectProps}>{this.props.children}</select>
  }

}

export default Chosen;
