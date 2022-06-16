import React, { useState, useTransition } from 'react';
import { faker } from '@faker-js/faker';

export const ConcurrentRendering = () => {
  const [isPending, startTransition] = useTransition();
  const [numbers, setNumbers] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);

  const onChangeHandler = (e) => {
    const value = parseInt(e.target.value, 10);
    setSliderValue(value);

    startTransition(() => {
      const data = new Array(value).fill(null).map((d, index) => {
        return faker.internet.emoji();
      });

      setNumbers(data);
    });
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen bg-purple-100">
      <div className="flex-1 w-1/2">
        <input
          className="w-1/2 mb-2.5"
          type="range"
          value={sliderValue}
          onChange={() => onChangeHandler()}
          min="0"
          max="100"
          step="10"
        />
        <span>{sliderValue}</span>
        <div className="flex flex-row flex-wrap content-start overflow-scroll h-80">
          {numbers.map((number, index) => (
            <div
              className="flex justify-center items-center break-all bg-purple-500 border border-white"
              style={{ height: 40, width: 40 }}
              key={index}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
