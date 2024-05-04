import style from "./Method.module.css";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import X from "../../../Images/X.png";
import XEmpty from "../../../Images/XEmpty.png";
import Puntini from "../../../Images/Puntini.png";

export default function Method() {
  return (
    <>
      <div className={style.container} id="Method">
        <h2 className={` ${style.title} mulish`}>Cosa ti svelerò</h2>

        <Container className={style.grid}>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={style.name}>
              Ottimizzazione
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Come ottimizzare il tuo sito web per essere indicizzato al
                meglio dai motori di ricerca e raggiungere i tuoi clienti
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={style.name}>
              Curiosità <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Come trasformare il tuo sito web in un posto in cui i tuoi
                clienti si sentano incuriositi da te e dalla tua attività
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={style.name}>
              Grafica <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Come rendere il tuo sito web graficamente accattivante, in modo
                da catturare l&apos;attenzione dei tuoi clienti
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={style.name}>
              Contenuti <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Come creare contenuti coinvolgenti e di valore per i tuoi
                clienti e per i motori di ricerca
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={style.name}>
              SEO oriented
              <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Come creare contenuti che siano ottimizzati per i motori di
                ricerca e come utilizzare le parole chiave per essere trovato
                dai tuoi clienti ideali
              </p>
            </Col>
          </Row>
          <Row className="flex-column flex-sm-row">
            <Col sm={12} className={style.name}>
              Target <div className={style.underline}></div>
            </Col>
            <Col sm={12}>
              <p className={style.description}>
                Trova il tuo target di riferimento e capisci come raggiungerlo e
                fidelizzarlo con il tuo sito web
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
