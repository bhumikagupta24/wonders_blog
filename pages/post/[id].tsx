import { useRouter } from 'next/router';
import { getPosts } from '@/data/posts';
import styles from '../../styles/PostDetails.module.css';
import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';

const PostDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const posts = getPosts();
  const post = posts.find((post: { id: number; }) => post.id === Number(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <>
      <Header
        onClick={() => router.push('/')}
        name='Bhumika Wonders Blog'
        title='Back to Home'
      />
      <div className='topBlk'>
        <div className='container bg-light text-dark'>
          <div className='justify-content-between align-items-center row'>
            <div className='col-lg'>
              <div className='py-lg-3 py-2'>
                <h1>{post.title}</h1>
                <small>Published on: {new Date(post.createdAt).toLocaleDateString()}</small>
              </div>
            </div>
            <div className='col-lg-auto'>
              <div className={`py-lg-3 ${styles.editBtn}`}>
                <Link className='btn btn-primary' href={`/create-post?id=${post.id}`} passHref>
                  Edit Post
                </Link>
              </div>
            </div>
          </div>
          {post.image && <Image height={600} width={1200} src={post.image} alt={post.title} className={styles.featureImage} />}
          <div className='px-2'>
            <p>{post.description}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
