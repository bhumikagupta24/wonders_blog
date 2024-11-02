/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle'
import styled from './style.module.css';
import DummyImg1 from '@/public/images/DummyBanner.jpg'

interface HeroSlider {
  postData: Post[];
  }
  interface Post {
    image: File;
    id: number;
    title: string;
    description: string;
    createdAt: string;
  }
const HeroSlider: React.FC<HeroSlider> = ({postData}) => {
  const formatDate = (dateString: string | number | Date) => {
    const date: any = new Date(dateString);
    const now: any = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
  
    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  };
  
  return (
    <section className='topBlk'>
        <div className="container">
          <div className={ `mt-lg-5 ${styled.heroBorder}`}>
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
            >
              {postData.map(post => {
                  return (
                    <>
                      <SwiperSlide key={post.id}>
                        <div className='px-lg-3 gx-4 gx-xl-5 align-items-center row'>
                          <div className='col-lg-5'>
                            <div className={styled.lftDiv}>
                              <div className="global-meta pb-2 order-2 order-lg-1">
                                <span>
                                {formatDate(post.createdAt)}&nbsp;
                                  by&nbsp;
                                  <Link href='javascript:void(0)' >Ayush</Link>
                                </span>
                              </div>
                              <div className={`${styled.sldHdg} order-1 order-lg-2`}>
                                <h2>
                                  <Link href={`/post/${post.id}`}>
                                    {post.title ? post.title : 'test blog' }
                                  </Link>
                                </h2>
                                <p>{post.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-7'>
                            <div className={styled.sldImg}>
                              <Image src={DummyImg1} alt={post.title ? post.title : 'test blog' } width={692} height={542}/>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  )})}
            </Swiper>
          </div>
        </div>
      </section>
  )
}

export default HeroSlider