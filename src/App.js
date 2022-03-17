import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Portofolio from './pages/Portofolio/Portofolio';

function App() {
  return (
    <div className="App" >

      <div class="parent">
        <div id="nav-div">
          <Nav />
        </div>
        <div class="section blue" >
          <Home />
          <Contact />
          <Portofolio />
        </div>
      </div>



    </div>
  );
}

export default App;
