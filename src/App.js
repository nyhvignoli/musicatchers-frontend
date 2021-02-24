import React from 'react';
import NavBar from '../src/components/NavBar/NavBar';
import BaseForm from '../src/components/BaseForm/BaseForm';

const App = () => {
  return (
    <div>
      <header>
        <h1>MusiCatchers</h1>
        <NavBar/>
        <BaseForm/>
      </header>
    </div>
  );
};

export default App;