import React, {useState} from "react";
import { useForm } from "react-hook-form";
import{ init, sendForm } from "emailjs-com";
init("user_CYgU2VqH715rOw1BOp8oP");

const Contact = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("Message");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    const statusMessage = document.querySelector('.status-message');
    const form = document.querySelector('#contact-form');
    generateContactNumber();
    sendForm('default_service', 'template_8ypdi7a', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
        setStatusMessage("Sent!");
        statusMessage.className = "status-message success";
        setTimeout(()=> {
          statusMessage.className = 'status-message'
        }, 5000)
      }, function(error) {
        console.log('FAILED...', error);
        setStatusMessage("Failed to send message! Please try again later.");
        statusMessage.className = "status-message failure";
        setTimeout(()=> {
          statusMessage.className = 'status-message'
        }, 5000)
      });
  }

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;

  return (
    <div className="contact">
      <h3>Contact me</h3>
      <p>Want to find out more? Fill out the form below to get in touch.</p>
      <p>Please note that any details filled out below will not be shared with anyone other than myself.</p>

      <div className="form-container">
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
          
          <input type='hidden' name='contact_number' value={contactNumber} />
          
          <div className="form-inner">
            {errors.user_name && errors.user_name.type === "required" && ( <div role="alert">Name is required<br/></div> )}
            <input type='text' name='user_name' placeholder='Name' maxLength='30' aria-invalid={errors.user_name ? "true" : "false"}   {...register('user_name', { required: true })}/>
          </div>

          <div className="form-inner">
            {errors.user_email && errors.user_email.type === "required" && ( <div role="alert">Email is required<br/></div> )}
            <input type='email' name='user_email' {...register('user_email', { required: true })} placeholder='Email' />
          </div>

          <div className="form-inner">
            {errors.message && errors.message.type === "required" && ( <div role="alert">Message is required<br/></div> )}
            <textarea name='message' maxLength='1500' {...register('message', { required: true })} placeholder='Message'/>
            
          </div>

          <div className="btn-message space-between">          
            <div className="wrap-styling"><input className="styled-btn" type='submit' value='Send' />
            <p className="status-message">{statusMessage}</p></div>
            <div><p>Characters Left: {messageCharsLeft}</p></div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Contact;