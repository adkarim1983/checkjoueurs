/*import React from 'react';

const Player = ({ nom, équipe, nationalité, numéroMaillot, âge, image }) => {
  return (
    <div className="player-card">
      <img src={image} alt={nom} />
      <h2>{nom}</h2>
      <p>Équipe: {équipe}</p>
      <p>Nationalité: {nationalité}</p>
      <p>Numéro de maillot: {numéroMaillot}</p>
      <p>Âge: {âge}</p>
    </div>
  );
};

export default Player; */
import React from 'react';

const Player = ({ nom, équipe, nationalité, numéroMaillot, âge, imageUrl }) => {
  
  return (
    <div className="player-card">
      <img src={imageUrl} alt={nom} />
      <h2>{nom}</h2>
      <p>Équipe: {équipe}</p>
      <p>Nationalité: {nationalité}</p>
      <p>Numéro de maillot: {numéroMaillot}</p>
      <p>Âge: {âge}</p>
      
    </div>
  );
};
Player.defaultProps = {
    nom: "",
    équipe: "",
    nationalité: "",
    numéroMaillot: "Numéro Inconnu",
    âge: "Âge Inconnu",
    imageUrl: "lien-de-l-image-par-défaut.jpg", 
  };



export default Player;


