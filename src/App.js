import { Switch, Route, withRouter } from "react-router-dom";
// --pages
import Home from './pages/Home';
// --components
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" render={(props) => <Home />} />
      </Switch>
    </>
  );
}

export default withRouter(App);
