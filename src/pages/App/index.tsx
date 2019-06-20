import React from 'react';
import './App.css';

import NavBar from '../../components/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <hr/>
      Science in a Nutshell
    </div>
  );
}

export default App;