import { Card, Container, Row, Col, Image } from "react-bootstrap"
import captImage from "../assets/images/hero/ca.jpg";
import h1Image from "../assets/images/hero/antman.jpg";
import h2Image from "../assets/images/hero/avenger.jpg";
import h3Image from "../assets/images/hero/bigh6.jpg";
import h4Image from "../assets/images/hero/gog.jpg";
import h5Image from "../assets/images/hero/spiderman.jpg";

const Hero = () => {
    return (
        <Container>
            <br />
            <h1 className="text-white">Hero Movie</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper" id="heroes">
                    <Card className="movie-img">
                        <Image src={captImage} alt="Captain America The Winter Soldier " className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-2  text-white">
                                <Card.Title classname="text-center">Captain America The Winter Soldier</Card.Title>
                                <Card.Text classname="text-left" >
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                

                <Col md={4} className="movieWrapper">
                    <Card className="movie-img">
                        <Image src={h1Image} alt="Antman" className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-2 text-white">
                                <Card.Title classname="text-center">Antman</Card.Title>
                                <Card.Text classname="text-left" >
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={4} className="movieWrapper">
                    <Card className="movie-img">
                        <Image src={h2Image} alt="Avenger : Infinity War  " className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-2  text-white">
                                <Card.Title classname="text-center">Avengers: Infinity War</Card.Title>
                                <Card.Text classname="text-left" >
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={4} className="movieWrapper">
                    <Card className="movie-img">
                        <Image src={h3Image} alt="Big Hero 6" className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-2 text-white">
                                <Card.Title classname="text-center">Big Hero 6</Card.Title>
                                <Card.Text classname="text-left" >
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={4} className="movieWrapper">
                    <Card className="movie-img">
                        <Image src={h4Image} alt="Guardians of the Galaxy " className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-2  text-white">
                                <Card.Title classname="text-center">Guardians of the Galaxy</Card.Title>
                                <Card.Text classname="text-left" >
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={4} className="movieWrapper">
                    <Card className="movie-img">
                        <Image src={h5Image} alt="Spiderman : Far from Home " className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-2  text-white">
                                <Card.Title classname="text-center">Spiderman : Far from Home</Card.Title>
                                <Card.Text classname="text-left" >
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default Hero;