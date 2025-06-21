import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Lawas = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/top_rated`, {
            params: {
                
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            console.log(response.data.results);
            setMovies(response.data.results)
        })
    }, [])

    return (
        <Container>
            <br />
            <h1 className="text-white">Lawas Top Rated</h1>
            <br />
            <Row>
                {movies.map((result, index) => (
                    <Col md={3} className="movieWrapper" id="heroes" key={index}>
                        <Card className="movie-img" variant="dark">
                            <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="Movie Poster" className="Imagi" />
                            <div>
                                <div className="p-4 m-2  text-light">
                                    <Card.Title className="text-start">{result.original_title}</Card.Title>
                                    <Card.Text className="text-start">⭐{result.vote_average}</Card.Text>
                                    <Button
                                        text-center
                                        variant="light"
                                        className="tombol"
                                        onClick={() => navigate('/moviedetails', { state: { movie: result, from: 'lawas' } })}
                                    >
                                        Sinopsis
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Lawas;