import { useState } from "react";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import "./contact.css"

function Contact() {

    const [isHidden, setIsHidden] = useState(true);
    const [formObject, setFormObject] = useState({})

    const msgSent = () => {
        setIsHidden(false);
    };
    
    const sendNewMsg = () => {
        setIsHidden(true)
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v8jpah3', 'template_1q5wguh', form.current, 'user_rdfOXx7Nnrnex29ZxAMhD')
            .then((result) => {
                console.log(result.text);
                msgSent()
            }, (error) => {
                console.log(error.text);
                alert("FAILED...", error);
            });
    };


    return (
        <div id="contact">
            <div className="container">
                <h1>CONTACT ME</h1>
                <div className="row">
                    <div className="col" id="contact-detail">
                        <p><i class="bi-telephone"></i> Phone: +1 862-339-8389</p>
                        <p><i class="bi-envelope"></i> Email: kevkouadio@gmail.com</p>
                        <p><i class="bi-github"></i> GitHub: <a href="https://github.com/kevkouadio/" target="blank">https://github.com/kevkouadio/</a></p>
                        <p><i class="bi-linkedin"></i> Linkdin: <a href="https://www.linkedin.com/in/kouassi-kevin-kouadio-b731a071/" target="blank">Kouassi Kevin KOUADIO</a></p>
                    </div>
                    <div className="col">
                        <div className={isHidden ? "form-card" : "form-card visually-hidden"}>
                            <div className="card-body">
                                <h2 className="p-2 border-bottom">Send me an email</h2>
                                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Name</label>
                                        <input type="text" onChange={handleInputChange} name="user_name" className="form-control rounded-pill" id="exampleFormControlInput1" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Email address</label>
                                        <input type="email" name="user_email" onChange={handleInputChange} className="form-control rounded-pill" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea name="message" onChange={handleInputChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <br />
                                    <input className="btn btn-primary" type="submit" value="Send" disabled={!(formObject.user_name && formObject.user_email && formObject.message)} />
                                </form>
                            </div>
                        </div>
                        <div className={isHidden ? "card visually-hidden": "card"} id="msgSentCard">
                            <div className="card-body hidden">
                                <h2 className="card-title text-success">Message Sent!</h2>
                                <p className="card-text text-dark">Thanks for contacting me! I will be in touch with you shortly.</p>
                                {/* <button class="btn btn-primary" onSubmit={sendNewMsg}>send a new message</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
