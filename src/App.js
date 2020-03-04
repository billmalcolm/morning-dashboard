import React from 'react';
import './global.scss';
import logo from "./images/myday-logo.png";
import ToDo from "./Containers/todo.js";
import Weather from "./Containers/weather.js";



function App() {

  const date = new Date();

  return (
    <div className="App">
      <header className="App-header">
        <div className="inner">
          <img src={logo} alt="My Day logo" />
          <div>
            <p>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</p>
            <Weather />
          </div>
        </div>
      </header>
      <section>
        <div className="inner">
          <ToDo />
        </div>
      </section>
    </div>
  );
}

export default App;
