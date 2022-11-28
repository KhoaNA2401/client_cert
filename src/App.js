import logo from './logo.svg';
import './App.css';
import FormVerifyCert from './views/FormVerifyCert';
import ResponsiveAppBar from './views/navbar';
import FormFindCert from './views/FormFindCert';
import Intro from './views/intro';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar />

        {/* <Route path="/" >
          <Intro />
        </Route>
        <Route path="/verify" >
          <FormVerifyCert/>
        </Route>
        <Route path="/find" >
          <FormFindCert/>
        </Route> */}
        <Route
          path="/"
          exact
          render={() => <Intro />}
        />
        <Route
          path="/verify"
          render={() => (
            <FormVerifyCert />
          )}
        />
        <Route
          path="/find"
          render={() => (
            <FormFindCert />
          )}
        />
      </Router>

    </div>
  );
}

export default App;
