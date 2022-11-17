import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0); // picks one of toRotate 's element to type on screen */
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Windy Little Town"]; // words to type and delete
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 1000; // time between letters being typed

    useEffect(()=>{ // this function types stuff
        let ticker = setInterval(() => {
            tick();
        }, delta) // delta is the interval

        return () => { clearInterval(ticker)};
    }, [text]) // everytime the text gets updated

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col>
                        <div className="banner-div">
                            <h1><span className="wrap">{text}</span></h1>
                            <p>Cute and square 2D games</p>
                            {/* <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}