import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="home">
      {/* Welcome Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Welcome to Bata</h1>
            <p className="lead">Discover our latest collection of shoes.</p>
            <ul className="list-unstyled">
              <li>Comfortable</li>
              <li>Durable</li>
              <li>Stylish</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Text Content Section */}
      <div className="container-fluid">
        <div className="card p-4">
          <p className="mb-4">
            At Bata, we strive to provide footwear that not only looks good but also feels good. Whether you're looking for sneakers, formal shoes, or casual sandals, we have something for every occasion.
          </p>
          <p className="mb-4">
            Our shoes are crafted with precision and attention to detail, ensuring unmatched comfort and durability. With Bata, you can step out in style and confidence, knowing that you're wearing quality footwear that will last.
          </p>
          <p>Explore our collection today and experience the difference with Bata.</p>
        </div>
      </div>

      {/* Carousel Section */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators/Dots */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        {/* Slideshow/Carousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/s3.jpg" alt="Sneakers" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="images/snekerwite.png" alt="White Sneakers" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="images/s4.jpg" alt="Formal Shoes" className="d-block w-100" />
          </div>
        </div>

        {/* Controls/Arrows */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
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

export default Home;
