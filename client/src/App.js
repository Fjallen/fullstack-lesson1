import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
//We will be using React Hook to be fancy
const App = () => {


  return (
    <div className="App">
      <div>
        <nav className="Navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path='/'>
          <IDPage />
        </Route>
        <Route path='/about'>
          <div>
            This is the About Page
          </div>
        </Route>
      </Switch>
    </div>
  );
}

const IDPage = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);
  //Get the rating of a person by name
  const checkID = () => {
    //Using Fetch for now so we don't rely on external libraries
    //Build url using the name valuel
    fetch(`http://localhost:4000/${name}`)
      .then(res => res.json())
      .then(data => {
        //Data looks like {status: status}
        setStatus(data.status)
      })
  }
  return (
    <div>
      <div className="Input Form" onSubmit={checkID}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={checkID}>Check ID</button>
      </div>
      <div className="Result Form">
        <p>ID Check result: {status}</p>
      </div>
    </div>
  )
}

export default App;
