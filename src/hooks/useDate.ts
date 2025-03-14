import { useEffect, useState } from "react";
import getDaysBetween from "../helpers/getDaysBetween";

const START_DATE = 'START_DATE'
const END_DATE = 'END_DATE'

const useDate = () => {
    const today = new Date()
    const [startDate, setStartDate] = useState<Date>(today);
    const [endDate, setEndDate] = useState<Date>();
    const differenceDate = getDaysBetween(startDate, endDate);
  
    const handleStartDate = (date: Date) => {
      setStartDate(date);
      window.localStorage.setItem(START_DATE, date.toISOString());
    };
    const handleEndDate = (date: Date) => {
      setEndDate(date);
      window.localStorage.setItem(END_DATE, date.toISOString());
    };
  
    useEffect(() => {
      const storedStartDate = window.localStorage.getItem(START_DATE)
      const storedEndDate = window.localStorage.getItem(END_DATE);
      
      if (storedStartDate) {
        setStartDate(new Date(storedStartDate));
      }
  
      if (storedEndDate) {
        setEndDate(new Date(storedEndDate));
      }
    }, []);

    return {
        startDate,
        differenceDate,
        handleStartDate,
        handleEndDate,
    }
};

export default useDate;