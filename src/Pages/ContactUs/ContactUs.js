import React, { useState } from "react";
import "./ContactUs.css";
import Button from "../../components/Button/Button";
// import { HiOutlineMail } from "react-icons/hi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:4000/api/v1/email/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      alert("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };
  return (
    <section className="contact-section">
      <div className="contact-page">
        <div className="contact-themeblock">
          <h2>Get in touch</h2>
        </div>
        <div className="contact-themeblock">
          <div className="contact-rte">
            <div className="contact-enlarge-text">
              <p className="contact-para">
                You can contact us with any questions related to online sales
                through the following channels:
              </p>
              <p className="contact-para">
                <strong>Call / Whatsapp us at :&nbsp; </strong>
                <a href="#" className="contact-strong">
                  <strong>03022994444</strong>
                </a>
              </p>
              <p className="contact-para">
                <strong>E-mail us on :&nbsp; </strong>
                <a href="#" className="contact-strong">
                  <strong>support@radstore.pk</strong>
                </a>
              </p>
              <p className="contact-para">
                <strong>
                  Alternatively, you can reach us by filling the contact form
                  below.
                </strong>
              </p>
              <p className="contact-para">
                Please note that our Customer Service Department Hours are
                Monday to Friday from 9.00am to 5.00pm PST. Please allow up to
                24 hours for the representative to get back to you.
              </p>
            </div>
          </div>
        </div>

        <div className="contactus-form">
          <div className="contact-pagewidth">
            <div className="contact-header">
              <h1 className="contactheader-title">Contact us</h1>
            </div>
            <div className="contact-form-vertical">
              <form onSubmit={handleSubmit}>
                <div className="contact-gridsmall">
                  <div className="contact-Form-box-input">
                    <label htmlFor="name">Name</label>
                    <div className="contact-Form-box-input-box">
                      <div className="contact-Form-box-input-box-icon"></div>
                      <input
                        type="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-Form-box-input-userName"
                      />
                    </div>
                  </div>
                  <div className="contact-Form-box-input">
                    <label htmlFor="email">Email</label>
                    <div className="contact-Form-box-input-box">
                      <div className="contact-Form-box-input-box-icon"></div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-Form-box-input-userName"
                      />
                    </div>
                  </div>
                </div>
                <div className="contact-Form-box-input-full">
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input
                    name="phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    cols="30"
                    rows="6"
                  ></input>
                </div>
                <div className="contact-Form-box-input-full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    cols="30"
                    rows="6"
                  ></textarea>
                </div>
                <Button
                  btnName="Send"
                  // classStyle={styles.button}
                  class_name="button-btn"
                  btn_label="Send"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
