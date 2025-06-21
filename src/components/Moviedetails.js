import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Moviedetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state?.movie;
    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        if (movie) {
            axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${movie.id}/videos`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY
                }
            }).then((res) => {
                // Filter hanya video type 'Trailer' atau 'Teaser'
                setTrailers(res.data.results.filter(
                    vid => vid.type === "Trailer" || vid.type === "Teaser"
                ));
            });
        }
    }, [movie]);

    if (!movie) {
        return (
            <Container className="text-center mt-5">
                <h3>Data film tidak ditemukan.</h3>
                <Button onClick={() => navigate(-1)}>Kembali</Button>
            </Container>
        );
    }

    return (
        <Container className="p-5">
            <Row>
                <Col md={4}>
                    <Image
                        src={`${process.env.REACT_APP_IMG_URL}${movie.poster_path}`}
                        alt={movie.title}
                        fluid
                        rounded
                    />
                </Col>
                <Col md={8} className="text-light">
                <a onClick={() => navigate(-1)} className="bbtn">Kembali</a>
                    <h2>{movie.title}</h2>
                    <p><strong>Rating:</strong> ⭐{movie.vote_average}</p>
                    <p><strong>Sinopsis:</strong> {movie.overview}</p>
                    

                    <Button variant="secondary" onClick={() => navigate(-1)}>
                        Tonton Sekarang
                    </Button>
                    {/* Trailer Section */}
                    <div className="mt-5">
                        <h4>Trailers & Teasers</h4>
                        <Row>
                            {trailers.slice(0, 3).map((trailer, idx) => (
                                <Col md={4} key={trailer.id} className="mb-3">
                                    <Card bg="dark" text="light">
                                        <Card.Img
                                            variant="top"
                                            src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
                                            alt={trailer.name}
                                            style={{ borderRadius: "10px 10px 0 0", height: "150px", objectFit: "cover" }}
                                        />
                                        <Card.Body>
                                            <Card.Title>{trailer.name}</Card.Title>
                                            <Card.Text>
                                                {trailer.type} &middot; {trailer.size}p
                                            </Card.Text>
                                            <Button
                                                variant="outline-light"
                                                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Tonton
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Moviedetails;