import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styled from './style.module.css';
import DummyImg from '@/public/images/dummy.jpg'
import IcoDlt from '@/public/icons/IcoDlt';

interface CardSection {
  postData: Post[];
  onClick: (id: number) => void;
  }
interface Post {
  image: File;
  id: number;
  title: string;
  description: string;
  createdAt: string;
}
  
const CardSection: React.FC<CardSection> = ({postData, onClick}) => {
  
  return (
    <section className='blogPost '>
    <div className='container'>
      <div className='d-lg-block'>
        <div className='g-4 row'>
          {postData.map(post => {
            return (
              <div className='col-lg-4' key={post.id}>
                <div className={styled.cardOuter}>
                  <Link href={`/post/${post.id}`} passHref>
                    <div className={styled.cardMda}>
                      <Image
                        src={DummyImg}
                        alt={post.title ? post.title : 'test blog'}
                        width={416}
                        height={200}
                      />
                    </div>
                    <div className={styled.cardItem}>
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                      <h4>{post.title}</h4>
                      <p>{post.description}</p>
                    </div>
                  </Link>
                  <div className={styled.btnDlt}>
                    <Link href='javascript:void(0)' onClick={() => onClick(post.id)}>
                      <i>
                        <IcoDlt />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
  )
}
export default CardSection