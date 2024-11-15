import { ThumbsUp } from "lucide-react";

export function Post({ post, className }) {
  return (
    <div className={`bg-white shadow-md border p-6 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold leading-6 mb-4">{post.title}</h3>

      <p className="text-sm text-gray-500 mb-6">{post.body}</p>

      <div className="flex items-center gap-4">
        <button className="size-8 hover:bg-gray-200 flex items-center justify-center rounded-md">
          <ThumbsUp className="h-5 w-5" />
        </button>

        <span className="tet-gray-600 text-sm">({post.likes.length})</span>
      </div>
    </div>
  );
}
