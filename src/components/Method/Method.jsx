import style from "./Method.module.css";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import X from "../../Images/X.png";
import XEmpty from "../../Images/XEmpty.png";
import Puntini from "../../Images/Puntini.png";

export default function Method() {
  // const theme = useSelector((state) => state.theme);
  return (
    <>
      <div className={style.container} id="Method">
        <h2 className={` ${style.title} mulish`}>Il mio metodo</h2>

        <Container className={style.grid}>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              Metodo SPARK <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Il Metodo Spark è un approccio unico che utilizzo per infondere
                energia e vitalità nei tuoi progetti di web design e social
                media. Questo metodo è stato sviluppato con l&apos;obiettivo di
                ottimizzare la presenza online e aumentare l&apos;engagement del
                tuo brand.
              </p>
            </Col>
            <Col sm={12} className={`${style.name} barlow`}>
              Creatività <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Non mi limito a copiare quello che fanno gli altri, ma
                sperimento nuove idee e soluzioni. Nessun template già pronto,
                ma 100% personalizzato.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              Report e statistiche <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Fornisco report dettagliati e statistiche approfondite,
                permettendoti di visualizzare i risultati ottenuti. Questi dati
                ti aiuteranno a comprendere meglio le performance del tuo sito
                web e dei tuoi canali social, e a identificare le strategie più
                efficaci per il tuo business.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              Servizio completo <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Offro un servizio completo che include la creazione del tuo sito
                web e la gestione dei tuoi social media. Questo approccio
                integrato garantisce coerenza grafica e comunicativa,
                migliorando l&apos;immagine del tuo brand e l&apos;esperienza
                dell&apos;utente.
              </p>
            </Col>
          </Row>

          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              Coinvolgimento
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Collaboro strettamente con te in ogni fase del processo di
                sviluppo, ascoltando attentamente le tue esigenze e fornendo
                consulenza esperta, con la possibilità di seguire il progetto in
                ogni sua fase.
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={`${style.name} barlow`}>
              Contenuti unici
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Creo contenuti unici e coinvolgenti, studiati per catturare
                l&apos;attenzione del tuo pubblico e stimolare
                l&apos;interazione. Questo approccio personalizzato ti permette
                di distinguerti dalla concorrenza e di creare un legame più
                forte con i tuoi clienti.
              </p>
            </Col>
          </Row>
        </Container>

        <Image src={X} alt="" className={style.x} />
        <Image src={XEmpty} alt="" className={style.xEmpty} />
        <Image src={Puntini} alt="" className={style.puntini} />

        <div className={style.color2}></div>
        <div className={style.color3}></div>
        <div className={style.color4}></div>
      </div>
    </>
  );
}
