import React from 'react';
import PlayerList from './PlayerList'; // Importez le composant PlayerList
import './style.css';

function App() {
  return (
    <div className="App">
      <h1>Liste des Joueurs</h1>
      <PlayerList /> 
    </div>
  );
}

export default App;
