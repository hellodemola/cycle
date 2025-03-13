/**
 * CycleResult
 *
 */

import { describe, expect, test } from "vitest";
import Cycle from "../helpers/cycle.class";

describe("CYCLERESULT_CLASS_TEST", () => {
  const startDate = new Date("01-01-2001");
  const nextCycle = new Cycle(startDate);
  test("PERIOD_NEXT_DAY_SHOULD_BE_28_DAYS", () => {
    expect(nextCycle.allCycles.nextPeriod).toStrictEqual(
      new Date("01-29-2001")
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
    expect(nextCycle.allCycles.lastPeriod).toStrictEqual(startDate);
  });
});
