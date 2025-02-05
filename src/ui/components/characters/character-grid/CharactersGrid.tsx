import { Character } from "@/modules/characters/characters";
import { CharacterCard } from "../character-card/CharacterCard";
import style from "./characterGrid.module.scss";

interface Props {
  characters: Character[];
}

export const CharactersGrid = ({ characters }: Props) => {
  return (
    <div className={style.grid}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
