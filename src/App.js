import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components //
import Header from './components/header/Header';

// context //
import CharactersState from './context/Characters/CharactersState';

// screens //
import CharacterList from './screens/characters/Characters';

function App() {
  return (
    <CharactersState>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={CharacterList} />
        </Switch>
      </Router>
    </CharactersState>
  );
}

export default App;
