import React from 'react';
import { api } from 'api/Api';
import { CharacterCard } from 'components/CharacterCard/CharacterCard';
import { Character } from 'types/apiTypes';
import { KEY_LS } from 'types/constants';
import Spinner from 'assets/spinner.svg';
import './CharacterCardList.css';

interface CharacterCardListProps {
  name: string | null;
}

interface CharacterCardListState {
  characters: Character[] | null;
  isLoading: boolean;
}

export class CharacterCardList extends React.Component<
  CharacterCardListProps,
  CharacterCardListState
> {
  state: CharacterCardListState = {
    characters: null,
    isLoading: true,
  };

  private async updateList(name: string | null): Promise<void> {
    let response: Character[];
    if (name) {
      response = await api.searchCharacter(name);
    } else {
      response = (await api.getCharacters()).data;
    }
    this.setState({ characters: response, isLoading: false });
  }

  componentDidMount(): void {
    const name = localStorage.getItem(KEY_LS);
    this.updateList(name);
  }

  componentDidUpdate(prevProps: Readonly<CharacterCardListProps>): void {
    if (this.props.name !== prevProps.name) {
      this.updateList(this.props.name);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="characterCardList">
        {this.state.isLoading && (
          <div className="spinner">
            <h2>Loading...</h2>
            <img src={Spinner} alt="spinner" width={250} height={250} />
          </div>
        )}
        {this.state.characters &&
          this.state.characters.map((character: Character) => (
            <CharacterCard key={character._id} character={character} />
          ))}
        {this.state.characters && this.state.characters.length < 1 && (
          <h2>No results</h2>
        )}
      </div>
    );
  }
}
