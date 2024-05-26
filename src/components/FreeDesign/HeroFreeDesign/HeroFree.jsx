import style from "./HeroFree.module.css";
import Image from "next/image";

import Bolla from "../../../Images/Bolla.png";
import FreeLesson from "../../../Images/FreeLesson.png";
import Indice from "../../../Images/Indice.png";

export default function HeroFree() {
  return (
    <div className={style.heroDiv} id="Home">
      <div className={style.heroSx}>
        <div className={style.myWork}>Lezione gratuita</div>
        <div className={` ${style.myName} mulish`}>
          Scarica la <span className={style.bold}>videolezione gratuita </span>
          per ottimizzare il tuo sito web attira clienti
        </div>
        <div className={style.heroDown}>
          <div className={style.line}></div>
          <p className={style.myDescription}>
            Impara i segreti del Web Design e scopri come creare un sito Web
            coinvolgente e strategico.
          </p>
        </div>
      </div>
      <div className={style.heroDx}>
        <Image src={Bolla} alt="" className={style.bolla1} />
        <Image src={Bolla} alt="" className={style.bolla2} />
        <Image src={Bolla} alt="" className={style.bolla3} />
        <Image src={Bolla} alt="" className={style.bolla4} />
        <Image src={Bolla} alt="" className={style.bolla5} />
        <Image
          src={FreeLesson}
          alt="Copertina"
          className={style.serviceImage1}
        />
        <Image src={Indice} alt="Indice" className={style.serviceImage2} />

        <a href="#Contacts" className={`${style.download} barlow`}>
          Scarica ora
        </a>

        <div className={style.color3}></div>
        <div className={style.color4}></div>
        <div className={style.color1}></div>
        <div className={style.color2}></div>
      </div>
    </div>
  );
}
