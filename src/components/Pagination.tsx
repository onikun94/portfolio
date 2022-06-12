import Link from 'next/link';
import React from 'react';

type PaginationPropsType = {
  totalCount: number;
};
export const Pagination: React.FC<PaginationPropsType> = ({ totalCount }) => {
  const PER_PAGE = 2;
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
