import { renderHook, act } from "@testing-library/react-hooks";
import { useUser } from "../useUser";

describe("", () => {
  test("", () => {
    const { result } = renderHook(() => useUser([]));

    expect(result.current.userList).toBe([]);
  });
});
