import React, { useState } from "react";
import "./UserDirectory.style.css";

type ComponentProps = {
  data: Array<any>;
  onSelect?: () => void;
};

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
};

const UserDirectory = (props: ComponentProps) => {
  const { data } = props;

  const [selectedUser, setSelectedUser] = useState<string>();
  const onSelect = (userId: string) => {
    setSelectedUser(userId);
  };

  return (
    <div>
      {data.map((user: UserData) => (
        <div
          className="userContainer"
          onClick={() => {
            onSelect(user.id);
          }}
        >
          <div className="userNameContainer">
            <div className="nameContainer">
              <span>{user.firstName}</span>
              <span>{user.lastName}</span>
            </div>
            <div>
              <span>{user.id}</span>
            </div>
          </div>

          <span>{user.email}</span>
        </div>
      ))}
    </div>
  );
};

export default UserDirectory;
