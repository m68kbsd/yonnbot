import React, { Component } from 'react';

import Header from '../Common/Header/Header';
import Post from '../Common/Post/Post';
import FeedSideBar from './FeedSideBar';
import Footer from '../Common/Footer/Footer';

import './Feed.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="col-sm-12 col-md-8">
          <Post />
        </div>

        <div className="col-sm-12 col-md-4">
          <FeedSideBar />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
