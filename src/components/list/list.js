import React, { Component } from 'react';

import Item from './item';
import Loader from '../loader/loader';

export default class List extends Component {

  componentWillMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }

  render () {
    const props = this.props.store.getState();
    return <div className="list">
      {props.loading && <Loader />}
      {props.data.map(item =>
        <Item key={item.id} item={item} />
      )}
    </div>
  }

}
