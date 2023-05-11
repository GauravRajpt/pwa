import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from "react-bootstrap";
import swDev from './swDev';
import {
  Outlet,
  Link
} from "react-router-dom";


swDev();

function App() {
  return (

    <div className="App">
            <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/" className='nav'>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/About" className='nav'>About</Link></Nav.Link>
            <Nav.Link ><Link to="/Users" className='nav'>Users</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
    
     
   
  );
}

export default App;
