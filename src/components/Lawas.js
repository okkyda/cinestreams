import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"

import axios from "axios";

const Lawas = () => {

     const [movies, setMovies] = useState([])
    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/tv`, {
            params: {
                api_key:process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            console.log("datas =>", response.data.results)
            setMovies(response.data.results)
            
        })
    } , [])
    return (
        <Container>
             <br />
            <h1 className="text-white">Old Hero Movie</h1>
            <br />
            <Row>
                {movies.map((result, index)=> {
                    return(
                    <Col md={4} className="movieWrapper" id="heroes">
                    <Card className="movie-img">
                        <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="Movie Poster " className="Imagi" />
                        <div className="bg-dark">
                            <div className="p-4 m-2  text-white">
                                <Card.Title classname="text-center">{result.title}</Card.Title>
                                <Card.Text classname="text-left" >
                                    {result.overview}
                                </Card.Text>
                                <Card.Text className="text-left">{result.release_date}</Card.Text>
                                <Button variant="light" href="#">Sinopsis</Button>
                            </div>
                        </div>
                    </Card>
                </Col>)
                })}
                
            </Row>
        </Container>

    )
}

export default Lawas;