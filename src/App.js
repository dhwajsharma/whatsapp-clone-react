import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import { useStateValue } from "./StateProvider"

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="app__body">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="/" exact >
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div >
        </>
      )
      }
    </div >
  );
}

export default App;
