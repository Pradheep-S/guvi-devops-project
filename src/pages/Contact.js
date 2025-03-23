import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h2 className="text-center">Contact Us</h2>
      <p className="text-center">
        Have a question or need assistance? Feel free to reach out to us. We're here to help!
      </p>

      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6">
            <h3 className='sendmsg'>Send Us a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" className="form-control" placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" rows="5" placeholder="Write your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="col-md-6">
            <br /><br /><br />
            <h3>Customer Care</h3>
            <p>
              <strong>Email:</strong> customercare@bata.com<br />
              <strong>Phone:</strong> +1 234 567 8900<br />
              <strong>Address:</strong> 123 Bata Street, City, Country, 12345<br />
            </p>
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>

            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/batashoes" target="_blank" rel="noopener noreferrer">Facebook</a><br />
              <a href="https://twitter.com/batashoes" target="_blank" rel="noopener noreferrer">Twitter</a><br />
              <a href="https://www.instagram.com/batashoes" target="_blank" rel="noopener noreferrer">Instagram</a><br />
              <a href="https://www.linkedin.com/company/bata-shoes" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>About BATA</h5>
              <p>
                Established in 1894, BATA has been a pioneer in the footwear industry for over a century, known for
                comfort and style. Our shoes are loved worldwide.
              </p>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <ul>
                <li>Phone: +1 234 567 8900</li>
                <li>Email: customercare@bata.com</li>
                <li>Address: 123 Bata Street, City, Country, 12345</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Useful Links</h5>
              <ul>
                <li><a href="/shop">Shop Online</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/faq">FAQs</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Social Media</h5>
              <ul>
                <li><a href="https://www.facebook.com/batashoes" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com/batashoes" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com/batashoes" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/bata-shoes" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center mt-3">
          <p>&copy; 2024 BATA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
