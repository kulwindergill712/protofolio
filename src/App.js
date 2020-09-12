import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'

import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import contact from './components/contact'
import project from './components/project'
import About from './components/About'
import sociallinks from './components/sociallinks';
import Footer from './components/Footer';
import NotFound from './components/Notfound';

window.url = "http://192.168.1.27/personal/protofolio-laravel/public/"



class App extends Component {
  render() {
    return (

      <div id="colorlib-page">

        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <div id="outer-container">
              <main id="page-wrap">

                <Router>
                  <Switch>

                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={contact} />
                    <Route path='/about' component={About} />
                    <Route path='/project' component={project} />
                    <Route path='/sociallinks' component={sociallinks} />
                    <Route path="*" component={NotFound} />
                  </Switch>

                  <Footer />

                </Router>
              </main>
            </div>
          </div>
        </div>
      </div >

    );

  }
}

export default App;