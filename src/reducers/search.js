import SearchConstants from '../constants/search';

const initialState = {
  query: '',
  loading: false,
  data: [],
  pagination: null
};

function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case SearchConstants.new:
      return Object.assign({}, state, {
        query: action.query,
        loading: true,
        data: [],
        pagination: null
      })
      break;
    case SearchConstants.on:
      return Object.assign({}, state, {
        loading: false,
        data: action.data,
        pagination: action.pagination
      });
      break;
    case SearchConstants.next:
      return Object.assign({}, state, {
        loading: false,
        data: state.data.concat(action.data),
        pagination: action.pagination
      });
      break;
    default:
      return state;
  }
}

export default SearchReducer;
