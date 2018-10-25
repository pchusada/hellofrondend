import React, { Component } from 'react';

import TopicSection from './Component/Index/TopicSection'
import Topic2 from'./Component/Index/Topic2'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <TopicSection />
       <TopicSection />
       <Topic2 />
      </div>
    );
  }
}

export default App;
