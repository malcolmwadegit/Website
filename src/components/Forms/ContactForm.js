// frontend/ContactForm.js

import React, { useState } from "react";
// import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
    // Define state variables to store form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    // const handleSubmit = async (event) => {
    //     event.preventDefault(); // Prevent default form submission behavior

    //     try {
    //         // Make an HTTP POST request to the server
    //         const response = await axios.post('http://localhost:5000/api/contact-page', { name, email, message }); // Pass form data as an object
    //         console.log('Data sent successfully:', response.data);
    //         // Optionally, reset the form fields after successful submission
    //         setName('');
    //         setEmail('');
    //         setMessage('');
    //     } catch (error) {
    //         console.error('Error sending data:', error);
    //     }
    // };

    return (
        <div className="page-container">
            <div className="component-container">
                <h2>Contact Me</h2>
                <div className="component-sub-container">
                    <form className="contact-form" >
                        <p className="input-container">
                            <label className="c-label">Name: </label>
                            <input
                                className='c-input-box'
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)} // Update name state
                                required // Use required attribute for HTML5 form validation
                            />
                        </p>
                        <p className="input-container">
                            <label className="c-label">Email: </label>
                            <input
                                className='c-input-box'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                                required // Use required attribute for HTML5 form validation
                            />
                        </p>
                        <p className="input-container">
                            <label className="c-label">Message: </label>
                            <input
                                className="text-box-component"
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} // Update message state
                                required // Use required attribute for HTML5 form validation
                            />
                        </p>
                        <button type="submit">Submit</button> {/* Use type="submit" for form submission */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
