import { ThumbsUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export function Post({ post, className }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function likePost() {
    dispatch({
      type: "LIKE_POST",
      payload: {
        id: post.id,
        username: state.user.prenom,
      },
    });
  }

  return (
    <div
      className={`bg-white shadow-md border p-6 rounded-lg flex flex-col ${className}`}
    >
      <h3 className="text-lg font-semibold leading-6 mb-4">{post.title}</h3>

      <p className="text-sm text-gray-500 mb-6 flex-1">{post.body}</p>

      <div className="flex items-center gap-4">
        <button
          className="size-8 hover:bg-gray-200 flex items-center justify-center rounded-md"
          onClick={likePost}
        >
          <ThumbsUp
            className="h-5 w-5"
            fill={
              post.likes.includes(state.user.prenom) ? "black" : "transparent"
            }
          />
        </button>

        <span className="tet-gray-600 text-sm">({post.likes.length})</span>
      </div>
    </div>
  );
}
