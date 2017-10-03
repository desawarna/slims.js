import React, { Component } from 'react';
import './scss/App.scss';

import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        this.setState(data)
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
