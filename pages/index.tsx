/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../data/posts';
import Header from '@/components/header';
import PaginationBtm from '@/components/PaginationBtm';
import ConfirmationModal from '@/components/ConfirmationModal';
import HeroSlider from '@/components/HeroSlider';
import CardSection from '@/components/CardSection';
import Heading from '@/components/Heading';
import Footer from '@/components/footer';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deleteId, setDeleteId] = useState<number>();
  const [postsPerPage] = useState<number>(9);
  const [deleteModalShow, setDeleteModalShow] = useState(false);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleDelete = () => {
    deletePost(deleteId!);
    setPosts(getPosts());
    setDeleteModalShow(false)
  };

  const handleConfirmDelete = (id: number) => {
    setDeleteId(id)
    setDeleteModalShow(true)
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  

  return (
    <>
      <Header
        href='/create-post'
        title='Create New Post'
        name='Bhumika Wonders Blog'
      />
      <HeroSlider
        postData={currentPosts}
      />
      <Heading
        name='Explore Our Blogs'
      />
      <CardSection
        postData={currentPosts}
        onClick={handleConfirmDelete}
      />
      <PaginationBtm postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      <Footer
        href=''
        title='Bhumika Gupta'
      />
      <ConfirmationModal
        onHide={() =>setDeleteModalShow(false)}
        show={deleteModalShow}
        handleAction={handleDelete}
      />
    </>
  );
};

interface Post {
  image: File;
  id: number;
  title: string;
  description: string;
  createdAt: string;
}


export default Home;
