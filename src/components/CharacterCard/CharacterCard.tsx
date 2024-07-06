import React from 'react';
import { Character } from 'types/apiTypes';
import './CharacterCard.css';

interface CharacterCardProps {
  character: Character;
}

export class CharacterCard extends React.Component<CharacterCardProps> {
  render() {
    return (
      <div className="characterCard">
        <img
          className="characterCard_image"
          src={this.props.character.image}
        ></img>
        <h2 className="characterCard_name">{this.props.character.name}</h2>
        <p className="characterCard_description">
          {this.props.character.description}
        </p>
      </div>
    );
  }
}
