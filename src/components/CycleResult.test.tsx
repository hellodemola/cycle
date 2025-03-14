/**
 * CycleResult
 *
 */

import { describe, expect, test } from "vitest";
import Cycle from "../helpers/cycle.class";

describe("CYCLERESULT_CLASS_TEST", () => {
  const startDate = new Date("01-01-2001");
  const differenceDate = 5;
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + differenceDate);
  const nextCycle = new Cycle(startDate, differenceDate);
  test("PERIOD_NEXT_DAY_SHOULD_BE_28_DAYS", () => {
    const nextPeriodStartDate = new Date("01-29-2001");
    const nextPeriodEndDate = new Date(nextPeriodStartDate);
    nextPeriodEndDate.setDate(nextPeriodEndDate.getDate() + differenceDate);
    expect(nextCycle.allCycles.nextPeriod.start).toStrictEqual(
      new Date(nextPeriodStartDate)
    );
    expect(nextCycle.allCycles.nextPeriod.end).toStrictEqual(
      new Date(nextPeriodEndDate)
    );
  });

  test("OVULATION_SHOULD_BE_IN_15_DAYS_BEFORE_THE_NEXT_PERIOD", () => {
    expect(nextCycle.allCycles.ovulationDay).toStrictEqual(
      new Date("01-15-2001")
    );
  });

  test("FERTILE_PERIOD_SHOULD_BE_5DAYS_BEFORE_OVULATION_AND_OVULATION_DATE", () => {
    expect(nextCycle.allCycles.fertilePeriod.start).toStrictEqual(
      new Date("01-10-2001")
    );
    expect(nextCycle.allCycles.fertilePeriod.end).toStrictEqual(
      new Date("01-15-2001")
    );
  });

  test("LAST_PERIOD_SAME_AS_FIRST_DAY_OF_LAST_PERIOD", () => {
    expect(nextCycle.allCycles.lastPeriod.start).toStrictEqual(startDate);
    expect(nextCycle.allCycles.lastPeriod.end).toStrictEqual(endDate);
  });
});
