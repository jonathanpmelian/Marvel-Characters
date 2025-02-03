import Image from "next/image";
import style from "./TopBar.module.css";
import { HeartIcon } from "@/assets/icons/HeartIcon";
import Link from "next/link";

export const TopBar = () => {
  const counter = 0;

  return (
    <div className={style.container}>
      <Image
        src="/marvel.svg"
        alt="marvel logo"
        width={130}
        height={52}
        priority
      />

      <div className={style["fav-container"]}>
        <Link href="/" aria-label="link to favorite page">
          <HeartIcon />
        </Link>
        <span className={style["fav-container__counter"]}>{counter}</span>
      </div>
    </div>
  );
};
