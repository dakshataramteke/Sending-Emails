import React, { useState } from "react";
import axios from 'axios';
// your-app.js
import Swal from 'sweetalert2/src/sweetalert2.js'

// your-app.scss


const Mail = () => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const clickMe =()=>{
        Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        const mailData = {
            to:to,
            subject: subject,
            message: message
        };

        axios.post('http://localhost:5000/mail', mailData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error('Error sending mail:', err); // Log the error
            });
    };

    return (
        <div className="container mt-5 border p-4">
            <form onSubmit={handleSubmit}>
            <h3 className="text-center">Sending Mail </h3>
                <div className="mb-3">
                    <label htmlFor="from" className="form-label">To :</label>
                    <input
                        type="email"
                        className="form-control"
                        id="to"
                        name="to"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message :</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center ">
                <button type="submit" className="btn btn-sm btn-primary " onClick={clickMe}>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default Mail;