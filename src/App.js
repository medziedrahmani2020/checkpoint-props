import React from 'react';
import Profile from './profile/Profile'
import './App.css';


function App() {

  let data = [
    {fname:'karim benzema',bio:'pro football player',profession:'football player',src:'https://i.imgur.com/NMMNg3w.jpg'},
    {fname:'michael jordan',bio:'boxer',profession:'developper'}
];

  const handlename = ()=>{
    
    return alert(data[0].fname)

  }

  return (
    <div className="App">
      <h3>hey there</h3>

      <Profile a={data} fn={handlename()}/>
    </div>
  );
}

export default App;
