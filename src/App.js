import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [data, setdata] = useState(null);
  useEffect(()=>{
      fetch("http://localhost:2000/getconfigdata")
      .then(res => res.json())
      .then(val => setdata(val));
  },[])
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
