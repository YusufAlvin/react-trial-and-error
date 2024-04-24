import React, {useRef} from 'react';
import {FmlxBadge} from 'fmlx-common-ui';
import './FmlxCommonUIPlayground.scss';

const FmlxCommonUIPlayground = () => {
  const anchorEl = useRef(null);

  return (
    <>
      <FmlxBadge
        anchorEl={anchorEl}
        variant={'positive'}
        size={'md'}
        borderColor="black"
        placement={{
          horizontal: 'right',
          vertical: 'top',
        }}
      />
      <div
        ref={anchorEl}
        style={{
          display: 'flex',
          width: 100,
          height: 100,
          backgroundColor: 'lightcoral',
        }}
      >
        <></>
      </div>
    </>
  );
};

FmlxCommonUIPlayground.propTypes = {};

FmlxCommonUIPlayground.defaultProps = {};

export default FmlxCommonUIPlayground;
