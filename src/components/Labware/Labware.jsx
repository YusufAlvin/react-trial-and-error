// import PropTypes from 'prop-types';
import React from 'react';
import './Labware.scss';
import {generateUniqueKey} from '../../libs/generateKey';
import Well from '../Well/Well';

const Labware = () => {
  const cols = 4;
  const rows = 3;

  const topIndexesContainerRef = React.useRef(null);
  const sideIndexesContainerRef = React.useRef(null);

  const initialState = {
    wellWidth: 0,
    wellHeight: 0,
  };

  const [state, setState] = React.useState(initialState);

  // const gridGap = () => {
  //   if (cols === 4 && rows === 5) return { columnGap: '0', rowGap: '3%' };
  //   if (cols === 3 && rows === 4) return { columnGap: '0', rowGap: '4%' };
  //   if (cols === 3 && rows === 5) return { columnGap: '5%', rowGap: '0' };
  //   if (cols === 4 && rows === 4) return { columnGap: '0', rowGap: '10%' };
  //   if (cols === 8 && rows === 6) return { columnGap: '0', rowGap: '10%' };
  //   if (cols === 1 && rows === 6) return { columnGap: '0', rowGap: '6%' };
  //   if (cols === 1 && rows === 8) return { columnGap: '0', rowGap: '3%' };
  //   return { columnGap: 0, rowGap: 0 };
  // }

  React.useEffect(() => {
    const parentWidth = 150 - 16;
    const parentHeight = 200 - 16;
    const sideIndexesWidth = sideIndexesContainerRef.current.offsetWidth + 8;
    const topIndexesHeight = topIndexesContainerRef.current.offsetHeight + 8;
    const wellsContainerWidth = parentWidth - sideIndexesWidth;
    const wellsContainerHeight = parentHeight - topIndexesHeight;

    setState((prevState) => ({
      ...prevState,
      wellWidth: wellsContainerWidth / cols,
      wellHeight: wellsContainerHeight / rows,
    }));
  }, []);

  const generateWells = () => {
    const wells = [];

    for (let iRow = 1; iRow <= rows; iRow += 1) {
      for (let iCol = 1; iCol <= cols; iCol += 1) {
        // const charIndex = String.fromCharCode(65 + cols - iCol);
        const key = generateUniqueKey('well');

        wells.push(<Well key={key} />);
      }
    }

    return wells;
  };

  const generateSideIndexes = () => {
    const indexes = [];

    for (let index = 0; index < rows; index++) {
      const key = generateUniqueKey('side-index');
      indexes.push(
        <div key={key} className="labware-side-index">
          {index + 1}
        </div>
      );
    }

    return indexes;
  };

  const generateTopIndexes = () => {
    const indexes = [];

    for (let index = cols; index > 0; index -= 1) {
      const char = String.fromCharCode(64 + index);
      const key = generateUniqueKey('top-index');
      indexes.push(
        <div key={key} className="labware-top-index">
          {char}
        </div>
      );
    }

    return indexes;
  };

  return (
    <div
      className="labware"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr) auto`,
        gridTemplateRows: `auto repeat(${rows}, 1fr)`,
      }}
    >
      <div ref={topIndexesContainerRef} className="labware-top-index-container">
        {generateTopIndexes()}
      </div>
      <div ref={sideIndexesContainerRef} className="labware-side-index-container">
        {generateSideIndexes()}
      </div>
      <div
        className="labware-wells-container"
        style={{
          gridColumnEnd: cols + 1,
          gridRowEnd: rows + 2,
          gridTemplateColumns: `repeat(${cols}, ${state.wellWidth}px)`,
          gridTemplateRows: `repeat(${rows}, ${state.wellHeight}px)`,
          // columnGap: gridGap().columnGap,
          // rowGap: gridGap().rowGap,
        }}
      >
        {generateWells()}
      </div>
    </div>
  );
};

// Labware.propTypes = {

// }

// Labware.defaultProps = {

// }

export default Labware;
