import React, { useState, useRef } from "react";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [submitted, setSubmitted] = useState('');

  // it gives whatever user give input in the form
  // const userNameChange = (e) => {
  //   setEnteredName(e.target.value);
  // };

  // const ageChange = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const userName = nameInputRef.current.value;
    const userAge = ageInputRef.current.value;
    const userCollege = collegeInputRef.current.value;

    if(userName.trim() === '' || userAge.trim() === ''){
      setSubmitted('Please Enter Valid name and age (non-empty values).');
    }

    else if(userAge < 1){
      console.log('Age is less then 1')
      setSubmitted('Please Enter Valid Age (>0).')
    }

    else{

      const obj = {
        name: userName,
        age: userAge,
        collegename: userCollege
      };
      
      // console.log(obj);
      props.onSaveUserData(obj);
      
      //to clear input area
      // setEnteredName("");
      // setEnteredAge("");

      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
      collegeInputRef.current.value = '';

      setSubmitted('');
    }
  };

  return (
    <form onSubmit={submitHandler} className='container w-50'>
      {submitted && (
        <div className="alert alert-danger">{submitted}</div>
      )
      }
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="User Name"
          // onChange={userNameChange} value={enteredName}
          ref={nameInputRef}
        />
        <label htmlFor="username">User Name</label>
      </div>
      <div className="form-floating">
        <input
          type="number"
          className="form-control"
          id="floatingPassword"
          placeholder="Age"
          // onChange={ageChange} value={enteredAge}
          ref={ageInputRef}
        />
        <label htmlFor="age">Age(Year)</label>
      </div>
      <div className="form-floating mt-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="College  Name"
          // onChange={userNameChange} value={enteredName}
          ref={collegeInputRef}
        />
        <label htmlFor="collegename">College  Name</label>
      </div>
      <br/>
      <button className="btn btn-success w-100">Submit</button>
    </form>
  );
};

export default UserInput;
