import React, { Component } from 'react';

import searchAction from '../../actions/search';

export default class Search extends Component {

  componentWillMount() {
    this.state = {
      query: this._getQueryFromURI()
    };
    if (this.state.query !== '') {
      this.props.store.dispatch(searchAction(this.state.query, 0));
    }
  }

  doSearch(e) {
    if (e.key === 'Enter' && this.state.query.length > 0) {
      this.props.store.dispatch(searchAction(this.state.query, 0));
      this._setQueryToURI();
    }
  }

  _setQueryToURI() {
    window.location.hash = `/${encodeURIComponent(this.state.query)}`;
  }

  _getQueryFromURI() {
    return decodeURIComponent(window.location.hash.split('/')[1] || '');
  }

  render () {
    return <div className="search-box">
      <input
        id="search"
        type="input"
        value={this.state.query}
        placeholder="Search for a gif ..."
        autoComplete="off"
        autoFocus
        onChange={e => this.setState({query: e.target.value})}
        onKeyPress={this.doSearch.bind(this)} />
      <p>
        <span className="links">
          <a href="https://github.com/maxigimenez/figme" target="_blank">
            {`</>`}
          </a> with {`<3`} by <a href="https://github.com/maxigimenez" target="_blank">@maxigimenez</a>
        </span>
        <a href="http://giphy.com/" target="_blank" className="giphy"></a>
      </p>
    </div>
  }

}
