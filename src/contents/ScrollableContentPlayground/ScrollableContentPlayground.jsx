import React, {useEffect, useRef, useState} from 'react';
import './ScrollableContentPlayground.scss';

const ScrollableContentPlayground = () => {
  const [state, setState] = useState({x: 0, y: 0, isClicked: false});
  const containerRef = useRef(null);
  const isClicked = useRef(false);
  const prevMousePosition = useRef({x: state.x, y: state.y});
  const count = useRef(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerElSize = containerRef.current.getBoundingClientRect();

      if (state.x > containerElSize.width) {
        containerRef.current.scrollLeft += 1;
      }

      if (state.x < containerElSize.width) {
        containerRef.current.scrollRight += 1;
      }
      console.log('count', count.current);
      console.log('state', state);
      console.log('containerElSize', containerElSize);
      count.current++;
    }
  }, [state]);

  const onMouseMoveHandler = (e) => {
    if (isClicked.current) {
      if (containerRef.current) {
        const size = containerRef.current.getBoundingClientRect();
        const x = e.clientX - size.left;
        const y = e.clientY - size.top;
        setState({...state, x, y});
      }
    }
  };

  const onMouseUpHandler = (e) => {
    isClicked.current = false;
    prevMousePosition.current.x = e.clientX;
    prevMousePosition.current.y = e.clientY;
    // setState({...state, isClicked: false});
  };

  const onMouseDownHandler = (e) => {
    isClicked.current = true;
    // setState({...state, isClicked: true});
  };

  return (
    <div ref={containerRef} className="scrollbale-playground">
      <div
        className="scrollbale-playground--content"
        onMouseMove={onMouseMoveHandler}
        onMouseDown={onMouseDownHandler}
        onMouseUp={onMouseUpHandler}
      >
        <></>
      </div>
    </div>
  );
};

export default ScrollableContentPlayground;
