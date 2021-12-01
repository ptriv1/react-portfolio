import React from 'react';

function Contact() {
    return (
        <div>
            <h1 class="contact-header">Contact</h1>
            <p class="contact-paragraph">Please use the below form to contact me!</p>
            <div>
                <form action="mailto:trivedp18@gmail.com" method="get" enctype="text/plain">
                    <div>
                        <label class="contact-form-label" for="name">Name:
                        <input type="text" name="name" id="name" />
                        </label>
                    </div>
                    <div>
                        <label class="contact-form-label" for="email">Email:
                        <input type="text" name="email" id="email" />
                        </label>
                    </div>
                    <div>
                        <label class="contact-form-label">Message:</label>
                        <br />
                        <textarea name="message"></textarea>
                    </div>
                    <div>
                        <input type="submit" name="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;