import {Route, Switch} from 'react-router-dom'
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path ="/">
          <Register />
        </Route>
        <Route exact path ="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
