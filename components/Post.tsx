import React from "react";
import Link from "next/link";

export type PostProps = {
  id: number;
  title: string;
  content: string;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  return (
    <div>
      <Link href={`/p/${post.id}`}>
      <a>{post.title}</a>
      </Link>
    </div>
  );
};

export default Post;
