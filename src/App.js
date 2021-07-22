import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './pages/main';
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import SelectedPost from "./pages/selected-post"

function App() {
  return (
      <div className="App flex-column">
          <Switch>
              <Route path="/my-blind-signup">
                  <SignUp/>
              </Route>
              <Route path="/my-blind-signin">
                  <SignIn/>
              </Route>
              <Route path="/my-blind/:id">
                  <SelectedPost/>
              </Route>
              <Route path="/my-blind">
                  <Main/>
              </Route>
              <Route path="/">
                  <Main/>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
