import { CharacterResponse } from '../types/apiTypes';

class Api {
  private readonly baseUrl =
    'https://starwars-databank-server.vercel.app/api/v1';

  private async requestCharacters(name?: string): Promise<CharacterResponse> {
    const url = `${this.baseUrl}/characters${name ? `/name/${name}` : ''}`;
    const resp: Response = await fetch(url);
    const res: CharacterResponse = await resp.json();
    return res;
  }

  public async getCharacters(): Promise<CharacterResponse> {
    return await this.requestCharacters();
  }

  public async searchCharacter(name: string): Promise<CharacterResponse> {
    return await this.requestCharacters(name);
  }
}

export const api = new Api();
