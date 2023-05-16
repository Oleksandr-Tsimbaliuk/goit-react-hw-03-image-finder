import { Watch } from 'react-loader-spinner';
import React from 'react';

export default function Loader() {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#000000"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
