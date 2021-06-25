import './App.css';
import NavigationBar from './components/NavigationBar';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Main from './components/Main';
import Stacks from './components/Stacks';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <NavigationBar />
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' component={ Main } />
        <Route exact path='/Stacks' component={ Stacks } />
        <Route exact path='/Experiences' component={ Experiences } />
        <Route exact path='/Education' component={ Education } />
        <Route exact path='/Projects' component={ Projects } />

        { /* 404 */}
        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
