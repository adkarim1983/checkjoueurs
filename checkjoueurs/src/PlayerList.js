import React from 'react';
import Player from './Player'; 
import joueurs from './Joueurs'; 

const PlayerList = () => {
  return (
    <div className="container">
      {joueurs.map((player, index) => (
        <Player
          key={index}
          nom={player.nom}
          équipe={player.équipe}
          nationalité={player.nationalité}
          numéroMaillot={player.numéroMaillot}
          âge={player.âge}
          imageUrl={player.imageUrl}
         
        />
      ))}
    </div>
  );
};

export default PlayerList;
