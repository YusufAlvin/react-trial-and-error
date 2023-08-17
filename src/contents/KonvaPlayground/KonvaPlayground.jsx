import React from 'react';
import {Stage, Layer, Arrow} from 'react-konva';
import './KonvaPlayground.scss';

const KonvaPlayground = () => {
  // const arrowRef = React.useRef(null);

  // React.useEffect(() => {
  //   if (arrowRef.current) {
  //     const context = arrowRef.current.getContext();
  //     context.beginPath();
  //     context.moveTo(50, 50);
  //     context.quadraticCurveTo(150, 100, 250, 50);
  //     context.fillStrokeShape(arrowRef.current);
  //   }
  // }, []);

  const startPoint = {x: 50, y: 200};
  const endPoint = {x: 500, y: 510};
  const curvedPoint = {x: 400, y: 200};

  const generateCurvePoint = () => {
    const controlX = (startPoint.x + endPoint.x) / 2;
    let controlY = 0;

    if (startPoint.y === endPoint.y) {
      controlY = startPoint.y - 50;
    } else {
      controlY = (startPoint.y - endPoint.y) / 2;
    }

    if (controlY < 0) {
      controlY = controlY * -1;
    }

    return {x: controlX, y: controlY};
  };

  console.log('generateCurvePoint() :>> ', generateCurvePoint());

  return (
    <div className="konvaplayground">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Arrow
            points={[
              startPoint.x,
              startPoint.y,
              curvedPoint.x,
              curvedPoint.y,
              // generateCurvePoint().x,
              // generateCurvePoint().y,
              endPoint.x,
              endPoint.y,
            ]} // Specify the starting and ending points of the arrow
            // ref={arrowRef}
            // points={[50, 50, 150, 100, 250, 50]} // Define the points to create the curve
            tension={0.5} // Adjust the curve's tension
            pointerLength={10} // Length of the arrow pointer
            pointerWidth={10} // Width of the arrow pointer
            fill="black" // Color of the arrow
            stroke="black" // Color of the arrow's outline
            strokeWidth={2} // Width of the arrow's outline
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default KonvaPlayground;
