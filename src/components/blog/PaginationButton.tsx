import React from 'react';

type PaginationButtonPropsType = {
  buttonName: string;
};

// eslint-disable-next-line react/display-name
export const PaginationButton: React.VFC<PaginationButtonPropsType> = React.memo(
  ({ buttonName }) => {
    return (
      <div className=" inline-block py-2 px-4 m-2 text-center bg-white hover:bg-gray-200 rounded-xl shadow cursor-pointer">
        {buttonName}
      </div>
    );
  },
);
