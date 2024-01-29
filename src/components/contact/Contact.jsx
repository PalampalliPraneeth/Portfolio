import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset previous error messages
    setNameError("");
    setEmailError("");
    setMessageError("");

    // Basic validation
    let isValid = true;
    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else if (!isValidName(name)) {
      setNameError("Name cannot contain special characters");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }
    if (messageText.trim() === "") {
      setMessageError("Message is required");
      isValid = false;
    } else if (!isValidMessage(messageText)) {
      setMessageError("Message cannot contain special characters");
      isValid = false;
    }

    // If all fields are valid, proceed to submit the form
    if (isValid) {
      // Submit form logic (for example, sending the data to the server)
      setMessageSent(true);
    }
  };

  const isValidName = (name) => {
    // Regular expression to match alphanumeric characters and spaces
    const nameRegex = /^[a-zA-Z0-9\s]+$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMessage = (message) => {
    // Regular expression to match alphanumeric characters, spaces, and common punctuation marks
    const messageRegex = /^[a-zA-Z0-9\s.,!?'"()-]+$/;
    return messageRegex.test(message);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <span className="error">{nameError}</span>}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="error">{emailError}</span>}
          <textarea
            placeholder="Message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          ></textarea>
          {messageError && <span className="error">{messageError}</span>}
          <button type="submit">Send</button>
          {messageSent && <span className="success">Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
