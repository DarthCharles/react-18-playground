import React, { useState, Suspense } from 'react';

import { fetchDogData } from './api';

// const resource = fetchDogData();

const CuteDog = ({ url }) => {
  return (
    <div>
      <img src={url} alt="dog" style={{ height: 400, width: 400 }} />
    </div>
  );
};

export const SuspenseExample = () => {
  const [dogPhotoResource] = useState(fetchDogData());

  const photo = dogPhotoResource.dog.read();

  const onClickHandler = () => {};

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-100">
      <Suspense fallback={<span className="text-xl">Loading 🐶...</span>}>
        <CuteDog url={photo.message} />
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-1.5"
          onClick={onClickHandler}
        >
          Next dog!
        </button>
      </Suspense>
    </div>
  );
};
