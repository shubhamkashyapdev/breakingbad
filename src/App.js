import {Fragment} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

// context //
import CharactersState from './context/Characters/CharactersState';



function App() {
  return (
    <CharactersState>
      <Router>
        <Switch>
          <Route exact path="/" component={} />
        </Switch>
      </Router>
    </CharactersState>
  );
}

export default App;
