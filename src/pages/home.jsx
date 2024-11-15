import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Heading } from "../components/heading";
import { Post } from "../components/post";
import { fetchPosts } from "../actions/post-actions";
import { Spinner } from "../components/spinner";

export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch({
      type: "LOGOUT",
    });

    navigate("/login");
  }

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 pt-8">
      <div className="flex items-center justify-center pb-10 gap-8">
        <Heading>Bienvenue {state.user.prenom}</Heading>

        <button className="text-sm font-medium underline" onClick={logout}>
          Logout
        </button>
      </div>

      {state.post.loading == true ? (
        <Spinner />
      ) : state.post.error ? (
        <p>{state.post.error}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {state.post.posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
