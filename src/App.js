import React from 'react';
import './global.scss';
import ToDo from './Containers/todo.js';
import Header from './Components/header.js';




function App() {

  return (
    <div className="App">
      <Header />
      <section>
        <div className="inner">
          <ToDo />
        </div>
      </section>
    </div>
  );
}

export default App;
