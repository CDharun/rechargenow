// ServicePage.js

import '../assets/Css/service.css';

function ServicePage() {
  return (
    <div className="service-container">
      <h2>Our Services</h2>
      <p>Welcome to our Mobile Recharge Portals Service Page. Here, you can explore the various services we offer to cater to your mobile recharge needs.</p>
      <div className="service-list">
        <div className="service-item">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1708598448/recharge/air_bdzfvd.svg" alt="Service 1" />
          <h3>Prepaid Recharges</h3>
          <p>Recharge your prepaid mobile phone with ease using our platform. Choose from a wide range of recharge plans and top up your balance instantly.</p>
        </div>
        <div className="service-item">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1708598427/recharge/bsnl_xc17e6.jpg" alt="Service 2" />
          <h3>Postpaid Bill Payments</h3>
          <p>Easily pay your postpaid mobile bills online through our portal. Enjoy hassle-free bill payments and never miss a due date.</p>
        </div>
        <div className="service-item">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1708598441/recharge/jio_eyplnt.png" alt="Service 3" />
          <h3>Data Packs & Offers</h3>
          <p>Explore a variety of data packs and special offers available for your mobile phone. Stay connected with high-speed internet at affordable prices.</p>
        </div>
        {/* Add more service items as needed */}
      </div>
    </div>
  );
}

export default ServicePage;
