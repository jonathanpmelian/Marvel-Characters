import { Character } from "@/modules/characters/domain/character";
import Image from "next/image";
import style from "./characterCard.module.scss";
import { HearthIconOutline } from "@/assets/icons/HeartIconOutline";
import Link from "next/link";

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <Link href={`/character/${character.name}`}>
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
    </Link>
  );
};
