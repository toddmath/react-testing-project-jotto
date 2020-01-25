import React from 'react';
import { Congrats, GuessedWords, Input } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Input data-test="input-component" />
      <GuessedWords data-test="guessed-component" />
      <Congrats data-test="congrats-component" />
    </div>
  );
}

export default App;
