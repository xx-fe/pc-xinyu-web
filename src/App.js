import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Home/Header';
import Footer from './Home/Footer';
import Home from './Home';

import {
  HeaderDataSource,
  FooterDataSource,
} from './Home/data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header dataSource={HeaderDataSource} isMobile={this.isMobile} />
          <Route exact path="/" component={Home} />
          <Footer dataSource={FooterDataSource} isMobile={this.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;