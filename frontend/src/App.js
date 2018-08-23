import React, { Component } from 'react';
import { Header } from './Header';
import UserListContainer from './UserListContainer';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='App-intro'>
          <UserListContainer />
          {/* <ProfileCard /> */}
        </div>
      </div>
    );
  }
}

export default App;
