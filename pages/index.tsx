import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../lib/prisma'
import { sortByDate } from "../utils";


export const getStaticProps: GetStaticProps = async () => {
  let feed = await prisma.post.findMany();
  feed = JSON.parse(JSON.stringify(feed));
  return {
    props: { feed: feed.sort(sortByDate) },
  };
};

type Props = {
  feed: PostProps[];
};

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div>
        <h1>Hello World</h1>
        <p>Start by using the new post button to add content to the home page.</p>
        <main>
           {
              props.feed.length == 0 ? <p>(Nothing to see here) ʕ•ᴥ•ʔ</p>
              :
              props.feed.map((post) => (
            <div key={post.id} className="my-2 border-b-2">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Home;


