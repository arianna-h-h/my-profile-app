import React, { Component } from 'react';
import { Header } from './components/Header';
import UserListContainer from './containers/UserListContainer';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='App-intro'>
          <UserListContainer />
        </div>
      </div>
    );
  }
}

export default App;
