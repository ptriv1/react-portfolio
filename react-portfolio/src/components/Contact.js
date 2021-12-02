import React from 'react';
import thoughtCatalog from '../thought-catalog-unsplash.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    const notifyOnEnter = () => toast("This field is required");
    const notifyOnExit = () => toast("Please enter an email in person@email.com format");

    return (
        <div className="contact">
            <h1 class="contact-header">Contact</h1>
            <img className="image-contact-page" src={thoughtCatalog} alt="thought-catalog"/>
            <p class="contact-paragraph">Please use the below form to contact me!</p>
            <div>
                <form action="mailto:trivedp18@gmail.com" method="get" enctype="text/plain">
                    <div class="contact-container">
                        <div class="contact-flex-left">
                            <label class="contact-form-label" for="name">Name:</label>
                            <label class="contact-form-label" for="email">Email:</label>
                            <label class="contact-form-label">Message:</label>
                        </div>
                        <div class="contact-flex-right">
                            <input class="contact-form-input" type="text" onMouseDownCapture={notifyOnEnter} name="name" id="name" /> 
                            <input class="contact-form-input" type="text" onMouseEnter={notifyOnExit} name="email" id="email" />
                            <textarea class="contact-form-input" name="message"></textarea>
                            <ToastContainer />
                        </div>
                    </div>
                        <div>
                            <input class="contact-submit" type="submit" name="submit" value="Submit" />
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;