import Link from 'next/link';
import React from 'react';
import style from './style.module.css'

interface HeaderProps {
  href?: string;
  title?: string;
  name?: string;
  onClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ href, title, name, onClick }) => {
  return (
    <div className={style.header}>
        <div className="container">
          <div className='align-items-center justify-content-between row'>
            <div className='col-lg-4 col'>
              <h4>{name}</h4>
            </div>
            <div className='col-auto'>
              {href ? (
                <Link className={style.btnLink} href={href} passHref>
                  {title}
                </Link>
              ) : (
                <button className={`${style.btnCommon} me-3 me-xl-4 btn btn-primary`} onClick={onClick}>
                  {title}
                </button>
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Header;
