// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_pz0d4f9', 'service_pz0d4f9', form.current, {
//         publicKey: '',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';// Updated to use correct package name
import './user_signup.css'; // Assuming you have some CSS for styling

const UserSignup = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


        emailjs
      .sendForm('service_pz0d4f9', 'template_qa64b3p', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
   

  return (
    <div className="signup-container">
      <h2>User Signup</h2>
      <form ref={form} onSubmit={sendEmail} className="signup-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="user_phone" required />
        </div>

        <div className="form-group">
          <label>Role</label>
          <input type="text" name="user_role"  required />
        </div>

        

        <div className="form-group">
          <label>Stream</label>
          <input type="text" name="user_stream"  required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" required />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default UserSignup;
