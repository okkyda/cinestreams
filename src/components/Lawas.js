import { Card, Container, Row, Col, Image } from "react-bootstrap"
import h6Image from "../assets/images/herolawas/batman.jpg";
import h1Image from "../assets/images/herolawas/blade.jpg";
import h2Image from "../assets/images/herolawas/dd.jpg";
import h3Image from "../assets/images/herolawas/hellboy.jpg";
import h4Image from "../assets/images/herolawas/spawn.jpg";
import h5Image from "../assets/images/herolawas/superman.jpg";

const Lawas = () => {
    return (
        <Container>
             <br />
            <h1 className="text-white">Old Hero Movie</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper" id="lawas">
                    <Card className="movie-img">
                        <Image src={h6Image} alt="Batman " className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-3 text-white">
                                <Card.Title classname="text-center">Batman</Card.Title>
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
                        <Image src={h1Image} alt="Blade" className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-3 text-white">
                                <Card.Title classname="text-center">Blade</Card.Title>
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
                        <Image src={h2Image} alt="DareDevil" className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-3  text-white">
                                <Card.Title classname="text-center">DareDevil</Card.Title>
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
                        <Image src={h3Image} alt="Hellboy" className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-3  text-white">
                                <Card.Title classname="text-center">Hellboy</Card.Title>
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
                        <Image src={h4Image} alt="Spawn" className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-3  text-white">
                                <Card.Title classname="text-center">Spawn</Card.Title>
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
                        <Image src={h5Image} alt="Superman" className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-3 text-white">
                                <Card.Title classname="text-center">Superman</Card.Title>
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

export default Lawas;