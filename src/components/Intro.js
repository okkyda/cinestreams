import {Container, Row, Col,Button} from 'react-bootstrap';
import {searchMovie} from '../api';

const Intro = () => {

    const search = async (q) => {
        if (q.length > 3){
        const query = await searchMovie(q)
        console.log({query:query})
        }
    }
    return (
<div className='intro'>
    <Container className='text-white d-flex justify-content-center align-items-center' >
        <Row>
            <Col>
                <div className='judul'>Hello</div>
                <div className='judul'>Welcome to Cinestream</div>
                <input placeholder='Cari Film' className='cari text-center'
                onChange={({target}) => search(target.value)}
                />
                <div className ='introButton mt-4  text-center'>
                    <Button variant='dark'>Lihat Judul Terbaru</Button>
                </div>
            </Col>
        </Row>
    </Container>
</div>
)}

export default Intro;