import React from 'react';
import thoughtCatalog from '../thought-catalog-unsplash.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    const notifyOnEnter = (event) => {
        console.log(event)
        console.log(event.target)
        window.alert("something happened")
        toast("This field is required");
      }
      const notifyOnExit = (event) => {
        console.log(event)
        console.log(event.target)
        window.alert("something happened")
        toast("Please enter an email in person@email.com format");
      }
      const testFunction = (event) => {
        console.log(event)
        console.log(event.target)
        window.alert("something happened")
        toast("testFunction triggered");
      }

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
                        <div>
                        <input class="contact-form-input" type="text" onBlur={testFunction} name="test" id="test" /> 
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