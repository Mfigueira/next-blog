import Head from 'next/head';
import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../helpers/posts-util';

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related posts!"
        />
      </Head>

      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
