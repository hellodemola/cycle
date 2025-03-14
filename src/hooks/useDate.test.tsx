/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useDate from "./useDate";

describe("useDate", () => {
  test("UPDATE_FUNCTION_SHOULD_UPDATE_DATE", () => {
    const sampleDate = new Date("01-01-2001");
    const sampleEndDate = new Date("01-14-2001");
    const { result } = renderHook(() => useDate());

    act(() => {
      result.current.handleStartDate(sampleDate);
      result.current.handleEndDate(sampleEndDate);
    });

    expect(result.current.startDate).toStrictEqual(sampleDate);
    expect(result.current.differenceDate).toBe(13);
  });
});
