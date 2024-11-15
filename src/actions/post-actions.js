import axios from "axios";

export function fetchPosts() {
  return function (dispatch) {
    dispatch({
      type: "FETCH_POSTS",
    });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const postsWithLikes = response.data.map((p) => {
          return {
            ...p,
            likes: [],
          };
        });

        dispatch({
          type: "FETCH_POSTS_SUCCESS",
          payload: postsWithLikes,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_POSTS_ERROR",
          payload: error.message,
        });
      });
  };
}
