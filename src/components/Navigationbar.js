import {Navbar,Container,Nav} from 'react-bootstrap'; 

const Navigationbar = () => {
return (
    <div>
    <Navbar variant='dark'>   
        <Container>
            <Navbar.Brand href="/">Cinestream</Navbar.Brand>
            <Nav>
            <Nav.Link href='#heroes'>Discovery</Nav.Link>
            <Nav.Link href='#lawas'>TV Show</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </div>
)
}

export default Navigationbar;