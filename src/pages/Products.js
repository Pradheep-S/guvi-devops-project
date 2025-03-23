import React from 'react';
import './Product.css'; // If the file is in the same directory

function Products() {
  const products = [
    {
      id: 1,
      name: 'Bata Comfort Flex Sneakers',
      description: 'Lightweight design for all-day comfort.',
      features: [
        'Breathable mesh upper for enhanced ventilation',
        'Flexible sole for natural foot movement',
      ],
      image: '/images/snekerwite.png',
    },
    {
      id: 2,
      name: 'Bata Urban Chic Loafers',
      description: 'Stylish suede finish for a sophisticated look.',
      features: [
        'Cushioned insole for long-lasting comfort',
        'Slip-on design for easy wearability',
      ],
      image: '/images/s3.jpg',
    },
    {
      id: 3,
      name: 'Bata Classic Leather',
      description: 'Premium leather construction for durability.',
      features: [
        'Soft textile lining for added warmth',
        'Sturdy heel for reliable support and traction',
      ],
      image: '/images/formal',
    },
    {
      id: 4,
      name: 'Bata Active Sports Sandals',
      description: 'Durable rubber outsole for traction and stability.',
      features: [
        'Adjustable straps for a customized fit',
        'Shock-absorbing midsole for impact protection',
      ],
      image: '/images/sports',
    },
    {
      id: 5,
      name: 'Bata Comfort Flex Sneakers',
      description: 'Lightweight design for all-day comfort.',
      features: [
        'Breathable mesh upper for enhanced ventilation',
        'Flexible sole for natural foot movement',
      ],
      image: '/images/s3.jpg',
    },
    {
      id: 2,
      name: 'Bata Urban Chic Loafers',
      description: 'Stylish suede finish for a sophisticated look.',
      features: [
        'Cushioned insole for long-lasting comfort',
        'Slip-on design for easy wearability',
      ],
      image: '/images/snekerwite.png',
    },
    {
      id: 3,
      name: 'Bata Classic Leather',
      description: 'Premium leather construction for durability.',
      features: [
        'Soft textile lining for added warmth',
        'Sturdy heel for reliable support and traction',
      ],
      image: '/images/sports',
    },
    {
      id: 4,
      name: 'Bata Active Sports Sandals',
      description: 'Durable rubber outsole for traction and stability.',
      features: [
        'Adjustable straps for a customized fit',
        'Shock-absorbing midsole for impact protection',
      ],
      image: '/images/formal',
    }
  ];

  return (
    <div className="container products-page">
      <h1 className="text-center mt-5 mb-4">Our Products</h1>
      <p className="text-center mb-4">
        Buy shoes effortlessly with our streamlined process. Explore our diverse collection,
        select your perfect pair, and complete your purchase with ease.
      </p>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a href="Con" className="btn btn-primary btn-block">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
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

export default Products;
