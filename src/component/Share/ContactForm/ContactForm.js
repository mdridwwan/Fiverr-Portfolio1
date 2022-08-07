import React from 'react';
import "./ContactForm.css";

const ContactForm = () => {
    return (
        <div className="form">
            <form>
                <label>Your Name</label>
                <input type="text" name="name" id="" />

                <label>Your Email</label>
                <input type="email" name="email" id="" />

                <label>Subject</label>
                <input type="text" name="text" id="" />

                <label>Message</label>
                <textarea rows='6' placeholder='Type your message here...' />
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;