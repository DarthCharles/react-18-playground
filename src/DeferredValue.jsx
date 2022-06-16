import React, { useState, useDeferredValue } from 'react';
import { faker } from '@faker-js/faker';

const data = new Array(5000).fill(null).map((d, index) => {
  return `${faker.animal.dog()} ${index}`;
});

const DogList = ({ data }) => {
  const deferredDogList = useDeferredValue(data);
  return (
    <div className="flex flex-col h-1/2 overflow-scroll w-1/3">
      {deferredDogList.map((product, index) => (
        <span className="bg-purple-500 text-white	border border-indigo-600 p-2.5 w-full">
          {product}
        </span>
      ))}
    </div>
  );
};

export const DeferredValue = () => {
  const [filter, setFilter] = useState('');

  const filteredData = data.filter((data) => data.includes(filter));

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-100">
      <input
        className="w-1/3 h-10 mb-2.5"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <DogList data={filteredData} />
    </div>
  );
};
