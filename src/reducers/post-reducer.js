const initialState = {
  loading: false,
  posts: [],
  error: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_POSTS_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
        error: null,
      };

    case "FETCH_POSTS_ERROR":
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
