import React from 'react';
import './assets/css/font-awesome.css'
import './App.css';
import {AppRouter} from './Router'
import {createDatabaseSchema} from './data/DatabaseSchema'

function App() {
  createDatabaseSchema();
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
