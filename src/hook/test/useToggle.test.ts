import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "../useToggle";

describe("", () => {
  test("false", () => {
    const { result } = renderHook(() => useToggle(false));

    expect(result.current.value).toBeFalsy();
  });

  test("true", () => {
    const { result } = renderHook(() => useToggle(false));

    // actで実行したい処理を書く
    // https://qiita.com/anneau/items/c3a1779ba228b23d0956
    act(() => result.current.toggle());

    expect(result.current.value).toBeTruthy();

    act(() => result.current.toggle());

    expect(result.current.value).toBeFalsy();
  });
});
