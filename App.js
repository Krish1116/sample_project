import { useState } from 'react';
import './App.css';
import UseInfo from './Components/UseInfo';
import UserForm from './Components/UserForm';


function App() {
  const [info, setInfo] = useState([]);
  
  const addInfoHandler = (useInfo) => {
    // console.log('in app.js');
    // console.log(useInfo);
    setInfo((preInfo) => {
      return [...preInfo, useInfo];
    })
  }

  return (
    <div className="App">
      <h1>it works</h1>
      <UserForm onAddInfo={addInfoHandler}/>
      <UseInfo info={info}/>
    </div>
  );
}

export default App;
