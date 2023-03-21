import React, { useState } from "react";
import UserInput from './UserInput';

const UserForm = (props) => {
    const [useInfo, setUserInfo] = useState(false);

  //submit button
  const UserDataHandler = (enteredInfo) => {
    const userData = {
      ...enteredInfo,
      id: Math.random().toString(),
    };
    // console.log(userData);
    props.onAddInfo(userData);
    setUserInfo(false);
  };
  return (
    <div>
      <UserInput onSaveUserData={UserDataHandler} />
    </div>
  );
};

export default UserForm;
