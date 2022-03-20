import { Button } from 'react-bootstrap';
import Typist from 'react-typist';
import './home.css'

function Home() {

    return (
        <div className='container-fluid' id="home-div">
            <div className="home-container" > 
                <img src="https://kevkouadio.github.io/kk-portofolio/images/IMG-1808.jpg" width={200} id="home-img"/>  
                <br/>
                <Typist>
                    <h1>Hi! My name is Kouassi Kevin Kouadio,</h1>
                    <h1>I'am a Full Stack Web Developper </h1>
                    <h2>Feel free to contact me by clicking on the Button below...</h2>
                    <span><a className='btn btn-primary' href="#contact">Contact Me</a></span>
                </Typist>
            </div>
        </div>
    )
}
export default Home