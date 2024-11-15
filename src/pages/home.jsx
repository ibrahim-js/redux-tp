import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Heading } from "../components/heading";
import { Post } from "../components/post";
import { fetchPosts } from "../actions/post-actions";

export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 pt-8">
      <Heading>Bienvenue {state.user.prenom}</Heading>

      {state.post.loading == true ? (
        <p>Loading...</p>
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
