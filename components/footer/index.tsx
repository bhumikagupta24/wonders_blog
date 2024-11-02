import React from 'react';
import styled from './style.module.css'
import Link from 'next/link';

interface FooterProps {
  href?: string;
  title?: string;
}

const Footer: React.FC<FooterProps> = ({ href, title }) => {
  return (
    <div className={styled.footer}>
      <div className='container'>
        <div className='align-items-center row'>
          <div className='col-6'>
            <div className={styled.ftrTxt}>
              <p>
                Designed by&nbsp;
                <Link href={href || '#'} passHref>
                  {title}
                </Link>
              </p>
            </div>
          </div>
          <div className='col-auto'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
