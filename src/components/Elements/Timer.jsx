/* eslint-disable react/prop-types */
// Timer.js
import  { useState, useEffect } from 'react';

const Timer = ({ till , textColor = 'text-custom-red' }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(till) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [till]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className={`flex items-center space-x-2 font-bold ${textColor}`}>
      <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
        {formatTime(timeLeft.days)}
      </div>
      <span className={`text-2xl font-bold ${textColor==='text-black' ? 'text-white':''}`}>:</span>
      <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
        {formatTime(timeLeft.hours)}
      </div>
      <span className={`text-2xl font-bold ${textColor==='text-black' ? 'text-white':''}`}>:</span>
      <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
        {formatTime(timeLeft.minutes)}
      </div>
      <span className={`text-2xl font-bold ${textColor==='text-black' ? 'text-white':''}`}>:</span>
      <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
        {formatTime(timeLeft.seconds)}
      </div>
    </div>
  );
};

export default Timer;
