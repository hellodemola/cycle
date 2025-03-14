import { useState } from "react";
import "./App.css";
import getDaysBetween from "./helpers/getDaysBetween.ts";
import CycleResult from "./components/CycleResult.tsx";
import CycleForm from "./components/CycleForm.tsx";

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>();
  const differenceDate = getDaysBetween(startDate, endDate);

  const handleStartDate = (date: Date) => setStartDate(date);
  const handleEndDate = (date: Date) => setEndDate(date);

  return (
    <>
      <h3>Menstrual cycle calendar</h3>
      <div style={{ display: "grid", gridTemplateRows: "12" }}>
        <CycleForm
          handleEndDate={handleEndDate}
          handleStartDate={handleStartDate}
          startDate={startDate}
        />
        {startDate && differenceDate && (
          <CycleResult startDate={startDate} differenceDate={differenceDate} />
        )}
      </div>
    </>
  );
}

export default App;
