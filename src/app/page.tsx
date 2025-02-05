import { CharactersResponse } from "@/modules/characters/domain/api-response";
import { Character } from "@/modules/characters/domain/character";
import { CharactersGrid } from "@/ui/components/characters/character-grid/CharactersGrid";
import style from "./home.module.scss";
import { SearchIcon } from "@/assets/icons/SearchIcon";

async function getCharacters(): Promise<Character[]> {
  const response: CharactersResponse = await fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${process.env.API_TIMESTAMP}&apikey=${process.env.PUBLIC_API_KEY}&hash=${process.env.API_HASH}&limit=50&offset=0&series=16450,21404,31445,26024,20606,21115`,
    {
      next: {
        revalidate: 3600 * 24,
      },
    }
  ).then((response) => response.json());

  const result = response.data.results.map((character) => ({
    id: character.id,
    name: character.name.toUpperCase(),
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  }));

  return result;
}

export default async function Home() {
  const characters = await getCharacters();

  return (
    <div className={style.page}>
      <div className={style.searchbar}>
        <div className={style.searchbar__content}>
          <SearchIcon />
          <input
            type="text"
            placeholder="SEARCH A CHARACTER..."
            className={style.searchbar__input}
          />
        </div>

        <span className={style.resultsText}>{characters.length} RESULTS</span>
      </div>
      <CharactersGrid characters={characters} />
    </div>
  );
}
