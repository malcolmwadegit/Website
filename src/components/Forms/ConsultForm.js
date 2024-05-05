import React, { useState } from "react";
// import axios from 'axios';
import './ConsultForm.css';

const ConsultForm = () => {
    // Define state variables to store form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Function to handle form submission
    // const handleSubmit = async (event) => {
    //     event.preventDefault(); // Prevent default form submission behavior

    //     try {
    //         // Make an HTTP POST request to the server
    //         const response = await axios.post('http://localhost:5000/api/', { name, email }); // Pass form data as an object
    //         console.log('Data sent successfully:', response.data);
    //         // Optionally, reset the form fields after successful submission
    //         setName('');
    //         setEmail('');
    //     } catch (error) {
    //         console.error('Error sending data:', error);
    //     }
    // };

    return (
        <div className="consult-component-container">
            <h3>Request Consultation</h3>
            <div className="consult-component-sub-container">
                <form className="consult-form" >
                    <p className="consult-input-container">
                        <label className="consult-label">Name: </label>
                        <input
                            className='consult-input-box'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} // Update name state
                            required // Use required attribute for HTML5 form validation
                        />
                    </p>
                    <p className="consult-input-container">
                        <label className="consult-label">Email: </label>
                        <input
                            className='consult-input-box'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            required // Use required attribute for HTML5 form validation
                        />
                    </p>
                    <button type="submit">Submit</button> {/* Use type="submit" for form submission */}
                </form>
            </div>
        </div>
    );
}

export default ConsultForm;
