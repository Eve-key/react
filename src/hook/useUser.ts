import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { User } from "../type/User";

const GET_USERS = "http://localhost:8080/selectUser";

export const useUser = (
  list: User[]
): {
  userList: User[];
} => {
  const [userList, setUserList] = useState<User[]>(list);

  const getUser = useCallback(async () => {
    const response = await axios.get(GET_USERS).catch(() => setUserList([]));
    if (response) setUserList(response.data);
  }, []);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { userList };
};
