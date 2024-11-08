import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './ContactForm.css';
import Button from '../Button/Button';

const ContactForm = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleToggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            if (response.data.message) {
                alert('Form submitted successfully!');
            } else {
                alert('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="contact-form-container">
            <div className="question-header" onClick={handleToggleForm}>
                <h4 className='title'>Ask a Question</h4>
                <FontAwesomeIcon 
                    icon={isFormVisible ? faChevronUp : faChevronDown} 
                    className="toggle-arrow" 
                />
            </div>

            {isFormVisible && (
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Button
                         btn_label="Send"
                         class_name="contact-form-button"
                         type="submit" />
                    </form>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
