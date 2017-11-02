import SearchConstants from '../constants/search';

function searchAction(query, offset) {
  return dispatch => {
    if (offset === 0) {
      dispatch({ type: SearchConstants.new, query });
    }
    return fetch(`http://api.giphy.com/v1/gifs/search?api_key=${__API__}&q=${query}&limit=8&offset=${offset}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: offset > 0 ? SearchConstants.next : SearchConstants.on,
        data: response.data,
        pagination: response.pagination
      });
    });
  }
}

export default searchAction;
