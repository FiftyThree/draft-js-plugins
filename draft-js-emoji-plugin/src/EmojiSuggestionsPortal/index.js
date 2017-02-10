import React, { Component } from 'react';

export default class EmojiSuggestionsPortal extends Component {

  componentWillMount() {
    this.props.store.register(this.props.offsetKey);
    this.updatePortalClientRect(this.props);

    // RW: HACK, don't accidentally clear the state when the
    // editorState prop is empty but the real state is not.
    if (this.props.getEditorState().getCurrentContent().hasText()) {
      // trigger a re-render so the EmojiSuggestions becomes active
      this.props.setEditorState(this.props.getEditorState());
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updatePortalClientRect(nextProps);
  }

  componentWillUnmount() {
    this.props.store.unregister(this.props.offsetKey);
  }

  updatePortalClientRect(props) {
    this.props.store.updatePortalClientRect(
      props.offsetKey,
      () => (
        this.searchPortal.getBoundingClientRect()
      ),
    );
  }

  render() {
    return (
      <span
        className={this.key}
        ref={(element) => { this.searchPortal = element; }}
      >
        {this.props.children}
      </span>
    );
  }
}
