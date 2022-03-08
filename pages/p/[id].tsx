import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import prisma from '../../lib/prisma'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
  });
  post = JSON.parse(JSON.stringify(post));
  return {
    props: post,
  };
};

async function publishPost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/")
}

// DELETE Function is implemented below, feel free to use it. It is, however, not in use in the starter boilerplate.
async function deletePost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/")
}

const Post: React.FC<PostProps> = (props) => {

  let title = props.title;

  return (
    <Layout>
      <div>
      <div>
        <h1>{title}</h1>
      </div>
        <div className="entry">
        <ReactMarkdown children={props.content} />
        </div>
      </div>
    </Layout>
  );
};

export default Post;
