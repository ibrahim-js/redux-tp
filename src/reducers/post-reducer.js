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

    case "LIKE_POST":
      const { id, username } = action.payload;

      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id == id) {
            return {
              ...post,
              likes: post.likes.includes(username)
                ? post.likes.filter((u) => u !== username)
                : [...post.likes, username],
            };
          } else {
            return post;
          }
        }),
      };

    default:
      return state;
  }
}
