import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} exact component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
