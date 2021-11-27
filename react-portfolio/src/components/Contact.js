import React from 'react';

function Contact() {
    return (
        <div class="contact">
            <h1>Contact</h1>
            <form class="contact-form">
                <div class="contact-form-line">
                    <label class="contact-form-label" for="name">Name:</label>
                    <input type="text" id="name" name="name"></input><br></br>
                </div>
                <div class="contact-form-line">
                    <label class="contact-form-label" for="email">Email:</label>
                    <input type="text" id="email" name="email"></input><br></br> 
                </div>
                <div class="contact-form-line">
                    <label class="contact-form-label" for="message">Message:</label>
                    <input type="text" id="message" name="message"></input><br></br>
                </div>
                <div class="contact-form-line">
                    <input type="submit" value="Submit"></input><br></br>
                </div>
            </form>
        </div>
    )
}

export default Contact;