import React from 'react'
import styled from './style.module.css'
interface PaginationBtmProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const PaginationBtm: React.FC<PaginationBtmProps> = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styled.pagDiv}>
      <ul className="pagination justify-content-center">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <b className="page-link" onClick={() => paginate(number)}>{number}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaginationBtm