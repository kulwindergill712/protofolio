import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'

import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import contact from './components/contact'
import project from './components/project'
import about from './components/about'
import sociallinks from './components/sociallinks';
import Blog from './components/blog';
import Blogdes from './components/blogdes';
import Footer from './components/Footer';
import NotFound from './components/Notfound';
import Login from './admincomponent/login';
import Projectdes from './components/projectdesvription';
import Adminhome from './admincomponent/adminhome';
import Side from './admincomponent/side';
import Nav from './admincomponent/nav';
import Social from './admincomponent/social';
import Project from './admincomponent/project';
import Contact from './admincomponent/contactus';
import Ablog from './admincomponent/blog';

window.url = "http://192.168.1.14/personal/protofolio-laravel/public/"

const LoginContainer = () => (
  <div >

    <main id="page-wrap">
      <div className="sidebar">

      </div>
      <Router>
        <Nav></Nav>
        <Side></Side>
        <Switch>


          <Route exact path="/admin" component={Login} />
          <Route path="/admin/home" component={Adminhome} />
          <Route path="/admin/social" component={Social} />
          <Route path="/admin/project" component={Project} />
          <Route path="/admin/contact" component={Contact} />
          <Route path="/admin/blog" component={Ablog} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>

    </main>

  </div>
)

const DefaultContainer = () => (
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
                <Route path='/about' component={about} />
                <Route path='/project' component={project} />
                <Route path='/sociallinks' component={sociallinks} />
                <Route path='/description/:id' component={Projectdes} />
                <Route path='/blog' component={Blog} />
                <Route path='/blogdes/:1' component={Blogdes} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Router>
            <Footer />
          </main>

        </div>
      </div>
    </div>
  </div >

)
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/admin' component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    );

  }
}

export default App;