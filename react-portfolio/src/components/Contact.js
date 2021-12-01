import React from 'react';

function Contact() {
    return (
        <div>
            <h1 class="contact-header">Contact</h1>
            <p class="contact-paragraph">Please use the below form to contact me!</p>
            <form action="action_page.php" class="contact-form">
                <div class="contact-form-line">
                    <label class="contact-form-label" for="name">Name:</label>
                    <input class="contact-form-input" type="text" id="name" name="name"></input><br></br>
                </div>
                <div class="contact-form-line">
                    <label class="contact-form-label" for="email">Email:</label>
                    <input class="contact-form-input" type="text" id="email" name="email"></input><br></br> 
                </div>
                <div class="contact-form-line">
                    <label class="contact-form-label" for="message">Message:</label>
                    <textarea id="message" name="message"></textarea><br></br>
                </div>
                <div class="contact-form-line">
                    <input class="contact-form-submit" type="submit" value="Submit"></input><br></br>
                </div>
            </form>
        </div>
    )
}

export default Contact;