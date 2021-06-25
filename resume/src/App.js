import './App.css';
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'
import NavigationBar from './components/NavigationBar';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Main from './components/Main';
import Stacks from './components/Stacks';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Projects from './components/Projects';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <NavigationBar />
      <Switch location={location} key={location.pathname}>
        <Route exact path='' component={ Main } />
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
