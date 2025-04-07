'use client';
import { useState, useEffect } from "react";
import { format } from 'date-fns';

const RealTimeDate: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <h5 className="mr-5 ml-5 text-sm">
      {format(currentDate, "EEE. d MMMM yyyy HH:mm")}
    </h5>
  );
}

export default RealTimeDate;
