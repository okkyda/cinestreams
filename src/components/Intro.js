import {Container, Row, Col,Button} from 'react-bootstrap';
const Intro = () => {
    return (
<div className='intro'>
    <Container className='text-white d-flex justify-content-center align-items-center' >
        <Row>
            <Col>
                <div className='judul'>Hello</div>
                <div className='judul'>Welcome to Cinestream</div>
                <div className ='introButton mt-4  text-center'>
                    <Button variant='dark'>Lihat Judul Terbaru</Button>
                </div>
            </Col>
        </Row>
    </Container>
</div>
)}

export default Intro;