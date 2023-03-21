import React from "react";

const UseInfo = (props) => {
  return (
    <div>
      {props.info.map((user) => (
        <div key={user.id}>
          <ul className="list-group container w-25"> 
            <li className="list-group-item mt-4 align-middle bg-secondary text-white">
              {user.name} --- {user.age}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UseInfo;
