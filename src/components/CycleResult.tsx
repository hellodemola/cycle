import Cycle from "../helpers/cycle.class";
import ResultCalendar from "./ResultCalendar";

interface ICycleResult {
  startDate: Date;
  endDate?: Date;
  differenceDate: number;
}

export default function CycleResult({
  startDate,
  differenceDate,
}: ICycleResult) {
  const { allCycles } = new Cycle(startDate, differenceDate);
  const events = [
    {
      id: 1,
      title: "fertile period",
      start: allCycles.fertilePeriod.start,
      end: allCycles.fertilePeriod.end,
    },
    {
      id: 2,
      title: "ovulation day",
      start: allCycles.ovulationDay,
      end: allCycles.ovulationDay,
    },
    {
      id: 3,
      title: "menstrual days",
      start: allCycles.nextPeriod.start,
      end: allCycles.nextPeriod.end,
    },
    {
      id: 4,
      title: "last period",
      start: allCycles.lastPeriod.start,
      end: allCycles.lastPeriod.end,
    },
  ];
  return (
    <div>
      <ResultCalendar events={events} />
    </div>
  );
}
