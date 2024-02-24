
import '../assets/Css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p> Empowering seamless mobile top-ups, our recharge portal offers
                convenient access to prepaid mobile services. With a
                user-friendly interface and secure transactions, stay connected
                effortlessly..</p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> +123456789</span>
            <span><i className="fas fa-envelope"></i> info@RecharegNow.com</span>
          </div>
        </div>
        {/* <div className="footer-section links">
          <h3>Quick Links</h3>
         
        </div>
        <div className="footer-section follow">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mobile Recharge Portal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
