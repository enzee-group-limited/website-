import { useEffect, useState } from "react";

const CountDown = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (targetTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      return false;
    }

    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000)).toString().padStart(2, "0");
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000)
      .toString()
      .padStart(2, "0");

    setCountDownTime({ days, hours, minutes, seconds });
    return true;
  };

  // useEffect(() => {
  //   const customDate = new Date();
  //   const countDownDate = new Date(
  //     customDate.getFullYear(),
  //     customDate.getMonth(),
  //     customDate.getDate() + 6,
  //     customDate.getHours(),
  //     customDate.getMinutes(),
  //     customDate.getSeconds() + 1
  //   ).getTime();

  //   const interval = setInterval(() => {
  //     if (!getTimeDifference(countDownDate)) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const countDownDate = new Date("2024-12-25T00:00:00").getTime(); // Replace target date here
  
    const interval = setInterval(() => {
      if (!getTimeDifference(countDownDate)) {
        clearInterval(interval);
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="flex justify-center items-center h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]">
    <div className="flex flex-col items-center gap-4">
      <h1 className="sm:text-3xl text-2xl font-semibold leading-8 text-black text-center">
        Countdown Timer
      </h1>
      <div className="flex gap-2 items-center">
        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            {countDownTime.days.split("").map((char, idx) => (
              <span
                key={`day-${idx}`}
                className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2 rounded drop-shadow-xl"
              >
                {char}
              </span>
            ))}
          </div>
          <span className="text-[#FBFAF8] text-[16px] sm:text-[20px] mt-1">DAYS</span>
        </div>
        <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            {countDownTime.hours.split("").map((char, idx) => (
              <span
                key={`hour-${idx}`}
                className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2 rounded drop-shadow-xl"
              >
                {char}
              </span>
            ))}
          </div>
          <span className="text-[#FBFAF8] text-[16px] sm:text-[20px] mt-1">HOURS</span>
        </div>
        <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            {countDownTime.minutes.split("").map((char, idx) => (
              <span
                key={`minute-${idx}`}
                className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2 rounded drop-shadow-xl"
              >
                {char}
              </span>
            ))}
          </div>
          <span className="text-[#FBFAF8] text-[16px] sm:text-[20px] mt-1">MINUTES</span>
        </div>
        <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            {countDownTime.seconds.split("").map((char, idx) => (
              <span
                key={`second-${idx}`}
                className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2 rounded drop-shadow-xl"
              >
                {char}
              </span>
            ))}
          </div>
          <span className="text-[#FBFAF8] text-[16px] sm:text-[20px] mt-1">SECONDS</span>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default CountDown;
