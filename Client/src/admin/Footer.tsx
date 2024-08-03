import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="admin-footer">
  <div className="footer-content">
    <div className="footer-section about">
      <h2>About Us</h2>
      <p>
        Chúng tôi cung cấp các dịch vụ quản lý website hàng đầu, hỗ trợ khách
        hàng với những giải pháp tối ưu và hiệu quả.
      </p>
    </div>
    <div className="footer-section links">
      <h2>Quick Links</h2>
      <ul>
        <li>
          <a href="#">Trang chủ</a>
        </li>
        <li>
          <a href="#">Dịch vụ</a>
        </li>
        <li>
          <a href="#">Liên hệ</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
      </ul>
    </div>
    <div className="footer-section contact">
      <h2>Contact Us</h2>
      <p>Email: support@yourdomain.com</p>
      <p>Phone: +84 123 456 789</p>
      <p>Address: 123 Your Street, Your City, Vietnam</p>
    </div>
    <div className="footer-section social">
      <h2>Follow Us</h2>
      <a href="#">
        <img src="facebook-icon.png" alt="Facebook" />
      </a>
      <a href="#">
        <img src="twitter-icon.png" alt="Twitter" />
      </a>
      <a href="#">
        <img src="linkedin-icon.png" alt="LinkedIn" />
      </a>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2024 YourCompany. All rights reserved.</p>
  </div>
</footer>

    </>
  )
}

export default Footer
