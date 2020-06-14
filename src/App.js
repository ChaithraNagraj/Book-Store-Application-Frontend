import React from 'react';
import AppRouter from './AppRouter';
import './App.css';


require('dotenv').config()

class App extends React.Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
