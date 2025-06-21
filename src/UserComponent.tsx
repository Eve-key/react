import { FC } from "react";
import { useUser } from "./hook/useUser";
import { useUpdateUser } from "./hook/useUpdateUser";
import { User } from "./type/User";

type Props = {
  text: string;
};

const UserComponent: FC<Props> = ({ text }) => {
  const { userList } = useUser([]);
  const { onUpdateUser } = useUpdateUser();

  return (
    <>
      <div>{text}</div>
      <div>
        {userList.map((user: User) => (
          <div>{user.name}</div>
        ))}
      </div>
      <button onClick={() => onUpdateUser()}>update</button>
    </>
  );
};

export default UserComponent;
