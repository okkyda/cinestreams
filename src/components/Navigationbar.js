import {Navbar,Container,Nav} from 'react-bootstrap'; 

const Navigationbar = () => {
return (
    <div>
    <Navbar variant='dark'>   
        <Container>
            <Navbar.Brand href="/">Cinestream</Navbar.Brand>

            <Nav>
            <Nav.Link href='#upcoming'>Upcoming</Nav.Link>
            <Nav.Link href='#heroes'>Discovery</Nav.Link>
            <Nav.Link href='#lawas'>TV</Nav.Link>
            <Nav.Link href='#'>Genre</Nav.Link>
            <Nav.Link href='#'>Year</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </div>
)
}

export default Navigationbar;