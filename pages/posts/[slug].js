import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/PostContent';
import { getPostData, getPostsFiles } from '../../helpers/posts-util';

const PostDetailPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <PostContent post={post} />
    </>
  );
};

export const getStaticProps = (context) => {
  const { slug } = context.params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
