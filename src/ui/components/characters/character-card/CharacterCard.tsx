import { Character } from "@/modules/characters/characters";
import Image from "next/image";
import style from "./characterCard.module.scss";
import { HearthIconOutline } from "@/assets/icons/HeartIconOutline";

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <article key={character.id} className={style.characterCard}>
      <Image
        src={character.image}
        alt={`${character.name} image`}
        width={189}
        height={190}
      />
      <hr className={style.line} />

      <div className={style.textbox}>
        <span className={style.text}>{character.name}</span>
        <HearthIconOutline />
      </div>
    </article>
  );
};
