import React, { Component } from 'react';

import searchAction from '../../actions/search';

export default class Pagination extends Component {

  componentWillMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }

  getMoreContent() {
    const props = this.props.store.getState();
    const offset = props.pagination.offset + props.pagination.count;
    this.props.store.dispatch(searchAction(props.query, offset));
  }

  render() {
    const props = this.props.store.getState();
    return <div className="pagination">
      {(props.pagination && props.pagination.count > 0) && <div className="btn" onClick={this.getMoreContent.bind(this)}>Get more</div>}
    </div>;
  }

}
