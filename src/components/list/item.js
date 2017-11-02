import React, { Component } from 'react';
import ClipboardButton from 'react-clipboard.js';
import ReactTooltip from 'react-tooltip';

export default class Item extends Component {

  componentWillMount() {
    this.state = {
      hover: false
    };
  }

  render() {
    const styling = {
      backgroundImage: `url(${this.props.item.images.original.url})`
    };

    return <div className="item">
      <ClipboardButton
        component="img"
        className="preview"
        button-src={this.props.item.images.original_still.url}
        data-clipboard-text={this.props.item.images.original.url}
        button-onMouseOver={() => this.setState({ hover: true })}
        button-onMouseOut={() => this.setState({ hover: false })}
        data-tip="Copied to clipboard!"
        data-event="click"
        data-event-off="click"
        data-delay-hide="1000" />
      <ReactTooltip />
      {this.state.hover && <div
        className="previewed"
        style={styling}></div>}
    </div>
  }

}
