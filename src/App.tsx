import "./App.css";
import CycleResult from "./components/CycleResult.tsx";
import CycleForm from "./components/CycleForm.tsx";
import useDate from "./hooks/useDate.ts";

function App() {
  const { handleEndDate, handleStartDate, startDate, differenceDate } =
    useDate();

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
