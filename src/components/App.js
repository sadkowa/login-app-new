import '../App.css';

import React, { useState } from 'react';
import LoginAuthApi from '../api/LoginAuthApi';

import { Header } from './Header';

function App() {

  return (
    <div className='App'>
      {/* <header className='App-header'>Login App</header> */}
      <Header>Login App</Header>
    </div>
  );
}

export default App;
