import { CharactersResponse } from "@/modules/characters/api-response";
import { Character } from "@/modules/characters/characters";
import { CharactersGrid } from "@/ui/components/characters/character-grid/CharactersGrid";
import style from "./home.module.scss";

async function getCharacters(): Promise<Character[]> {
  const response: CharactersResponse = await fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${process.env.API_TIMESTAMP}&apikey=${process.env.PUBLIC_API_KEY}&hash=${process.env.API_HASH}&limit=50&offset=0&series=16450,21404,31445,26024,20606,21115`
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
      <CharactersGrid characters={characters} />
    </div>
  );
}
