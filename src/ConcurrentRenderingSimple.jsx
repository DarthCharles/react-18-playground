import React, { useState, startTransition } from 'react';

export const ConcurrentRenderingSimple = () => {
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  const onClickHandler = () => {
    setCounter(counter + 1);
    startTransition(() => setShowCounter(!showCounter));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-100">
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-1.5"
        onClick={onClickHandler}
      >
        Click me
      </button>
      <div className="flex flex-1">
        {showCounter && <p className="text-6xl font-semibold">{counter}</p>}
      </div>
    </div>
  );
};
