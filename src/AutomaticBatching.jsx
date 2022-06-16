import React, { useEffect, useState } from 'react';

export const AutomaticBatching = () => {
  const [yellowBoxColor, setYellowBoxColor] = useState('yellow');
  const [cyanBoxColor, setCyanBoxColor] = useState('cyan');
  const [magentaBoxColor, setMagentaBoxColor] = useState('magenta');

  useEffect(() => {
    console.log('rerender!');
  });

  const onClickHandler = () => {
    setTimeout(() => {
      setCyanBoxColor((prevValue) => (prevValue === 'cyan' ? 'blue' : 'cyan'));
      setMagentaBoxColor((prevValue) =>
        prevValue === 'red' ? 'magenta' : 'red'
      );
      setYellowBoxColor((prevValue) =>
        prevValue === 'yellow' ? 'lime' : 'yellow'
      );
    }, 100);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-100">
      <div className="flex flex-row" style={{ height: 100 }}>
        <div style={{ width: 100, backgroundColor: cyanBoxColor }} />
        <div style={{ width: 100, backgroundColor: magentaBoxColor }}></div>
        <div style={{ width: 100, backgroundColor: yellowBoxColor }}></div>
      </div>
      <div>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-1.5"
          onClick={() => onClickHandler()}
        >
          Click me
        </button>
      </div>
    </div>
  );
};
