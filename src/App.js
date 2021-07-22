import './App.css';
import React, {useState} from 'react';
import { Switch, Route} from 'react-router-dom';
import Main from './pages/main';
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import SelectedPost from "./pages/selected-post"
import PostContext from "./PostContext";

function App() {
    const [allPosts, setAllPosts] = useState([]);
    const [post, setPost] = useState([]);
   const value = {allPosts: allPosts, setAllPosts:setAllPosts, post:post, setPost:setPost};

  return (
      <PostContext.Provider value={value}>
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
      </PostContext.Provider>
  );
}

export default App;
