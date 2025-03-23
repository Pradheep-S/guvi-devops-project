import React from 'react';
import './About.css'; // Import CSS for custom styles and images

function About() {
  return (
    <div className="about-page">
      <div className="banner-container">
        <img src="/images/b1.jpg" className="banner" alt="BATA Banner 1" />
        <img src="/images/1784.jpg" className="banner" alt="BATA Banner 2" />
      </div>

      <div className="about-content">
        <h2>About BATA Shoes</h2>
        <p>
          Founded in 1894 by Tomáš Baťa in the Czech Republic, BATA is one of the world's leading footwear companies,
          known for its commitment to quality and innovation. With over 5,300 retail stores across more than 70 countries,
          BATA has been a household name for generations.
        </p>

        <p>
          BATA combines style and comfort to offer a range of products suitable for all ages and lifestyles. Over the years,
          BATA has earned a reputation for creating durable and affordable footwear, making it a preferred choice for millions
          around the globe. From everyday shoes to high-performance athletic footwear, BATA consistently delivers on its promise
          of quality.
        </p>

        <p>
          BATA also focuses on sustainability, ensuring that its products are ethically sourced and manufactured with minimal environmental impact.
          Through initiatives like BATA Children's Program (BCP), the company supports communities by providing shoes and educational resources
          to children in need.
        </p>
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

export default About;
