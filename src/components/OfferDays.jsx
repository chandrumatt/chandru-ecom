import React, { useEffect, useState } from "react";
const OfferDays = ({ targetdDate }) => {
  //Calculate the Time logic current date and previous data and return the remaining

  const calculateTime = () => {
    const difference = new Date(targetdDate) - new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTime();
      setTime(updatedTime);
    }, [1000]);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {time.minutes > 1 ? (
        <div className="flex">
          <div className="flex flex-col items-center p-4 ">
            <h1>Days</h1>
            <h1 className="font-bold text-4xl">{time.days > 9 ? time.days : `0${time.days}`}</h1>
          </div>
          <div className="flex items-center text-4xl  p-3 ">:</div>
          <div className="flex flex-col  items-center p-4">
            <h1>Hours</h1>
            <h1 className="font-bold text-4xl">{time.hours > 9 ? time.hours : `0${time.hours}`}</h1>
          </div>
          <div className="flex items-center  text-4xl p-3">:</div>
          <div className="flex flex-col items-center p-4">
            <h1>Minutes</h1>
            <h1 className="font-bold text-4xl">{time.minutes > 9 ? time.minutes : `0${time.minutes}`}</h1>
          </div>
          <div className="flex items-center text-4xl p-3">:</div>
          <div className="flex flex-col p-4 items-center">
            <h1>Seconds</h1>
            <h1 className="font-bold text-4xl">{time.seconds > 9 ? time.seconds : `0${time.seconds}`}</h1>
          </div>
        </div>
      ) : (
        <div>No Offers Avaliable</div>
      )}
    </>
  );
};

export default OfferDays;
