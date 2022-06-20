import Link from 'next/link';
import React from 'react';

import { PaginationButton } from './blog/PaginationButton';

type PaginationPropsType = {
  totalCount: number;
  perpage: number;
};
export const Pagination: React.FC<PaginationPropsType> = ({ totalCount, perpage }) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  return (
    <div className="text-center">
      {range(1, Math.ceil(totalCount / perpage)).map((number, index) => (
        <Link key={index} href={`/blog/page/${number}`}>
          <a>
            <PaginationButton buttonName={String(number)} />
          </a>
        </Link>
      ))}
    </div>
  );
};
