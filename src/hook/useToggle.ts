import { useState, useCallback } from "react";

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = useCallback(() => {
    setValue((current: boolean) => !current);
  }, []);

  return { value, toggle };
};
