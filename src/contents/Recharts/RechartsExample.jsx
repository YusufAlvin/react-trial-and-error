import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './RechartsExample.scss';

const RechartExample = () => {
  const initialState = {
    data: []
  };

  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const randomNumber1 = Math.floor(Math.random() * 20) + 1;
    const randomNumber2 = Math.floor(Math.random() * 19) + 2;
    const randomNumber3 = Math.floor(Math.random() * 28) + 3;
    const randomNumber4 = Math.floor(Math.random() * 17) + 5;
    const interval = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        data: [
          ...prevState.data,
          {
            sample: randomNumber1,
            buffer: randomNumber2,
            nano: randomNumber3,
            finalVolume: randomNumber4,
            time: `${hours}:${minutes}:${seconds}`
          }
        ]
      }))
    }, 2000)

    return () => {
      clearInterval(interval);
    }
  });
  console.log('state.data :>> ', state.data);
  return (
    <div className='rechartsexample'>
      <LineChart
        width={500}
        height={300}
        data={state.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" domain={[0, 1]} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sample" name="Sample" stroke="#F7A246" dot={false} isAnimationActive={false} />
        <Line type="monotone" dataKey="buffer" name="Buffer" stroke="#3F9243" dot={false} isAnimationActive={false} />
        <Line type="monotone" dataKey="nano" name="Nano" stroke="#C74F00" dot={false} isAnimationActive={false} />
        <Line type="monotone" dataKey="finalVolume" name="Final Volume" stroke="#0059CC" dot={false} isAnimationActive={false} />
      </LineChart>
    </div>
  )
};

export default RechartExample;