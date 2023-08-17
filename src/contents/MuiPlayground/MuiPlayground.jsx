import React from 'react';
import Link from '@mui/material/Link';

const MuiPlayground = () => {
  const handleClick = (evt) => {
    evt.preventDefault();
    // window.open('https://mui.com/material-ui/react-link/')
  };

  return (
    <div className="mui-playground">
      <Link
        style={{
          pointerEvents: 'none',
        }}
        href="https://mui.com/material-ui/react-link/"
        variant="button"
        onClick={handleClick}
      >
        Link
      </Link>
    </div>
  );
};

export default MuiPlayground;
