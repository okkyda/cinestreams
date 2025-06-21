import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Upcoming = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/upcoming`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            console.log("datas =>", response.data.results)
            setMovies(response.data.results)

        })
    }, [])

    return (
        <div className="upcoming">
        <Container>
            <br />
            <h1 className="text-white">Upcoming Movie</h1>
            <br />
            <Row>
                {movies.map((result, index) => {
                    return (
                        <Col md={3} className="movieWrapper" id="upcoming">
                            <Card className="movie-img">
                                <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="Movie Poster " className="Imagi" />
                                <div >
                                    <div className="p-4 m-2  text-light">
                                        <Card.Title classname="text-center">{result.title}</Card.Title>
                                        {/* <Card.Text classname="text-left" >
                                    {result.overview}
                                </Card.Text> */}
                                        <Card.Text className="text-left">⭐{result.vote_average}</Card.Text>
                                        <Button
                                            variant="light"
                                            onClick={() => navigate('/moviedetails', { state: { movie: result } })}
                                        >
                                            Details
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    )
                })}

            </Row>

        </Container>
        </div>

    )
}

export default Upcoming;