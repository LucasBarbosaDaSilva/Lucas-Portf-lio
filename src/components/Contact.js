import React from 'react';
import '../components-css/Contact.css';

export default function Contact() {
  return (
    <div className="container">
      <div className="container container-fluid ">
        <h3 className="main-title tool" id="contact">Contact us</h3>
      </div>
      <p className="contact-p">If you liked something, have any curiosity or question, you can contact me by sending an email, or accessing my networks!</p>
      <div className="container contact-link">
        <a target="blank" href="mailto:lucasbarbosa.webdev@gmail.com" className="contact-link">
          <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png" className="contact-img img-fluid" alt="logo-gmail" />
        </a>
        <a target="blank" href="https://wa.me/5532988080152" className="contact-link">
          <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png" className="contact-img img-fluid" alt="logo-whatsapp" />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/lucasbarbosa123/" className="contact-link">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" className="contact-img img-fluid" alt="logo-linkedin" />
        </a>
        <a target="blank" href="https://github.com/LucasBarbosaDaSilva" className="contact-link">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="contact-img img-fluid" alt="logo-github" />
        </a>
      </div>
     
    </div>
  )
}