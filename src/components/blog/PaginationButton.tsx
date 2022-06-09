import React from 'react';

type PaginationButtonPropsType = {
  buttonClick: () => void;
  buttonName: string;
};

// eslint-disable-next-line react/display-name
export const PaginationButton: React.VFC<PaginationButtonPropsType> = React.memo(
  ({ buttonClick, buttonName }) => {
    return (
      <button
        className="py-2 px-4 m-4 text-center bg-white hover:bg-gray-200 rounded-xl shadow cursor-pointer"
        onClick={buttonClick}
      >
        {buttonName}
      </button>
    );
  },
);
