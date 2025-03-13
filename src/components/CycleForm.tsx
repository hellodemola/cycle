interface CycleFormProps {
  handleStartDate: (e: Date) => void;
  handleEndDate: (e: Date) => void;
  startDate: Date;
}

export default function CycleForm({
  handleStartDate,
  handleEndDate,
  startDate,
}: CycleFormProps) {
  const today = new Date().toISOString().split("T")[0];
  const nextFiveDays = new Date(startDate);
  nextFiveDays.setDate(startDate.getDate() + 7);
  return (
    <div>
      <p>Please pick your last menstrual start and end date</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/*<label htmlFor="date">First day for the last menstrual cycle Date</label>*/}
          <input
            name="date"
            type="date"
            onChange={(e) => handleStartDate(new Date(e.target.value))}
            max={today}
            placeholder="First date of last menstrual cycle date"
          />
        </div>
        <input
          name="date"
          onChange={(e) => handleEndDate(new Date(e.target.value))}
          disabled={!startDate}
          min={startDate?.toISOString().split("T")[0]}
          max={nextFiveDays?.toISOString().split("T")[0]}
          type="date"
          placeholder="Last date of last menstrual cycle date"
        />
      </div>
    </div>
  );
}
