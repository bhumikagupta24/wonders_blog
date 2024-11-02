import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { addPost, editPost, getPosts } from '../data/posts';
import styled from '@/styles/CreatePost.module.css';
import Image from 'next/image';
import InputCKEditor from '@/components/InputCKEditor';
import Button from '@/components/Button';
import Form from '@/components/Form';
import FormInput from '@/components/FormInput';
import Header from '@/components/header';
import { Editor } from '@ckeditor/ckeditor5-core';

const CreatePost = () => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (id) {
      const posts = getPosts();
      const existingPost = posts.find((post: { id: number; }) => post.id === Number(id));
      if (existingPost) {
        setTitle(existingPost.title);
        setDescription(existingPost.description);
        setContent(existingPost.content);
        setImage(existingPost.image);
        setImagePreview(existingPost.image);
      }
    }
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !content) {
      alert('All fields are required.');
      return;
    }

    if (id) {
      editPost({ id: Number(id), title, description, content, image });
    } else {
      addPost({ title, description, content, image });
    }
    
    router.push('/');
  };

  return (
    <>
      <Header
        onClick={() => router.push('/')}
        title='Back to Home'
        name={id ? 'Edit Post' : 'Create a New Post'}
      />
      <div className='topBlk'>
        <Form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            required={true}
            maxLength={100}
          />
          <FormInput
            placeholder="Subject"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            required={true}          
            inputType={false}
          />
          <InputCKEditor
            data={content}
            onChange={(event: unknown, editor: unknown) => {
              const data = (editor as Editor).getData();
              setContent(data);
            }}
          />
          <div className='mb-3'>
            <input
              className="form-control"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className={`${styled.imagePreview} mb-3`}>
                <Image 
                  src={imagePreview} 
                  alt="Preview" 
                  width={500}
                  height={300}
                />
              </div>
            )}
          </div>
          <Button
            type="submit"
            name={id ? 'Update Post' : 'Save Post'}
          />
        </Form>
      </div>      
    </>
  );
};

export default CreatePost;
