import { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { getUser, logout } from './services/userService';
// --pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
// --components
import Navigation from './components/Navigation';
// styling
import './App.css';

function App(props) {

  const [userState, setUserState] = useState({ user: getUser() });

  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
    props.history.push('/');
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push('/');
  }

  return (
    <>
      <Navigation user={userState.user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path='/' render={(props) => <Home user={userState.user} /> } />
        <Route exact path='signup' render={(props) => <Signup handleSignupOrLogin={handleSignupOrLogin} /> } />
        <Route exact path='/login' render={(props) => <Login handleSignupOrLogin={handleSignupOrLogin} /> } />
      </Switch>
    </>
  );
}

export default withRouter(App);
