import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components //
import Header from './components/header/Header';

// context //
import CharactersState from './context/Characters/CharactersState';

// screens //
import CharacterList from './screens/characters/Characters';
import Character from './screens/character/Character';

function App() {
  return (
    <CharactersState>
      <Router>
        <div className='main__container'>
          <Header />
          <Switch>
            <Route exact path='/badcharacter' component={CharacterList} />
            <Route exact path='/character/:id' component={Character} />
          </Switch>
        </div>
      </Router>
    </CharactersState>
  );
}

export default App;
