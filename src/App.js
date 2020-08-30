import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name:'MUHAMMED SHAFI' }
  }
  render() { 
    return ( 
    <React.Fragment>
      <Navbar data={this.state.name} />
      <Switch>
       <Route path='/project' component={Project}/>
       <Route path='/contact' component={Contact} />
       <Route path='/resume' component={Resume} />
       <Route path='/' render={()=><Home data={this.state.name} />}/>
      </Switch>
    </React.Fragment> );
  }
}
 
export default App;


