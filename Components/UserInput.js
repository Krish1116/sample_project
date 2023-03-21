import React, { useState } from "react";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [submitted, setSubmitted] = useState('');

  // it gives whatever user give input in the form
  const userNameChange = (e) => {
    setEnteredName(e.target.value);
  };

  const ageChange = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(enteredName.trim() === '' || enteredAge.trim() === ''){
      setSubmitted('Please Enter Valid name and age (non-empty values).');
    }

    else if(enteredAge < 1){
      console.log('Age is less then 1')
      setSubmitted('Please Enter Valid Age (>0).')
    }

    else{

      const obj = {
        name: enteredName,
        age: enteredAge,
      };
      
      // console.log(obj);
      props.onSaveUserData(obj);
      
      //to clear input area
      setEnteredName("");
      setEnteredAge("");

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
          onChange={userNameChange} value={enteredName}
        />
        <label htmlFor="username">User Name</label>
      </div>
      <div className="form-floating">
        <input
          type="number"
          className="form-control"
          id="floatingPassword"
          placeholder="Age"
          onChange={ageChange} value={enteredAge}
        />
        <label htmlFor="age">Age(Year)</label>
      </div>
      <br/>
      <button className="btn btn-success w-100">Submit</button>
    </form>
  );
};

export default UserInput;
