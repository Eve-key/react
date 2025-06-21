import { useCallback } from "react";
import axios from "axios";

const UPDATE_USERS = "http://localhost:8080/updateUser";

export const useUpdateUser = () => {
  const onUpdateUser = useCallback(async () => {
    await axios.post(UPDATE_USERS).catch((error) => console.log(error));
  }, []);

  return { onUpdateUser };
};
