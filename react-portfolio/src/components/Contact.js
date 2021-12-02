import React from 'react';
import thoughtCatalog from '../thought-catalog-unsplash.jpg';

function Contact() {

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
                            <input class="contact-form-input" type="text" name="name" id="name" /> 
                            <input class="contact-form-input" type="text" name="email" id="email" />
                            <textarea class="contact-form-input" name="message"></textarea>
                        </div>
                        <div>
                        <input class="contact-form-input" type="text" name="test" id="test" /> 
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