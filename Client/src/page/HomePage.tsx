import React, { useState } from 'react'

const HomePage = () => {
 
  return (
    <>
    <main>
  <div className="header-content">
    <div className="row">
      <div className="col-lg-6">
        <div className="title">
          <span>Your Next Laptop Awaits</span>
          <div>
            <img
              className="img-fluid"
              src="../image/laptop_banner.jpg"
              alt=""
            />
            <span />
          </div>
        </div>
        <p className="text-header">
          Discover the latest models with cutting-edge technology to boost your
          productivity and gaming experience.
        </p>
        <div className="btn-content d-flex">
          <button className="btn btn-warning">Book a Demo</button>
          <button className="btn  btn-outline-secondary">Book a Demo</button>
        </div>
      </div>
      <div className="col-lg-6">
        <img
          className="dashboard img-fluid"
          src="../image/laptop_display.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
  <div className="container py-5 list-item-1">
    <h3 className="text-light text-center pb-5">
      
      Boost Your Performance with Our Laptops.
    </h3>
    <div className="row">
      <div className="col-lg-4">
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid"
            src="../image/intel-banner-main-1a5dc52703.webp"
            alt=""
          />
        </div>
        <p className="main-title text-light text-center pt-4 px-5">
          High Performance
        </p>
        <div className="main-text px-3">
          <p className="text-light text-center">
            Experience unmatched speed and performance with our latest
            processors.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src="../image/aaaaaaaaaaa.jpg" alt="" />
        </div>
        <p className="main-title text-light text-center pt-4 px-5">
          Long Battery Life
        </p>
        <div className="main-text px-3">
          <p className="text-light text-center">
            Stay productive all day with laptops that offer long-lasting battery
            life.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid"
            src="../image/msi-10-67246986ae.webp"
            alt=""
          />
        </div>
        <p className="main-title text-light text-center pt-4 px-5">
          Sleek Design
        </p>
        <div className="main-text px-3">
          <p className="text-light text-center">
            Enjoy a modern, sleek design that is both stylish and functional.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container content py-5 why-list">
    <h2 className="text-light text-center">Why Choose Our Laptops</h2>
    <p className="text-light text-center">
      Discover the benefits of our top-rated laptops.
    </p>
    <div className="row">
      <div className="col-lg-12 row gx-5 pt-5">
        <div className="col-lg-6">
          <div className="image d-flex justify-content-center px-5">
            <img
              
              className="img-fluid"
              src="../image/cac-loai-kich-thuoc-man-hinh-laptop.jpg"
              alt="Laptop Sizes"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="item-main d-flex justify-content-center px-5">
            <div className="item">
              <h4 className="text-light">Advanced Features</h4>
              <p className="text-light">
                Our laptops come with a variety of advanced features to meet all
                your needs:
              </p>
              <hr className="py-3 text-light" />
              <ul className="list-text text-light fw-500">
                <li>Latest Processors</li>
                <li>High-Resolution Displays</li>
                <li>Backlit Keyboards</li>
                <li>Enhanced Security</li>
                <li>Customizable Options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 row gx-5 flex-row-reverse pt-5">
        <div className="col-lg-6">
          <div className="image d-flex justify-content-center px-5">
            <img
              
              className="img-fluid"
              src="../image/aff.jpg"
              alt="Premium Laptop"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="item-main d-flex justify-content-center px-5">
            <div className="item">
              <h4 className="text-light">Powerful Performance</h4>
              <p className="text-light">
                Our laptops are designed to provide powerful performance for all
                your tasks:
              </p>
              <hr className="py-3 text-light" />
              <ul className="list-text text-light fw-500">
                <li>Fast Boot Times</li>
                <li>Multitasking Capabilities</li>
                <li>Long Battery Life</li>
                <li>Efficient Cooling Systems</li>
                <li>High-Speed Connectivity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 row gx-5 pt-5">
        <div className="col-lg-6">
          <div className="image d-flex justify-content-center px-5">
            <img
              className="img-fluid"
              src="../image/acernitrolaptop-1650914214505.jpg"
              alt="Business Laptop"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="item-main d-flex justify-content-center px-5">
            <div className="item">
              <h4 className="text-light">Designed for Business</h4>
              <p className="text-light">
                Our business laptops are equipped with features to enhance your
                productivity:
              </p>
              <hr className="py-3 text-light" />
              <ul className="list-text text-light fw-500">
                <li>Robust Security Features</li>
                <li>Professional-Grade Software</li>
                <li>Durable Build Quality</li>
                <li>Easy Portability</li>
                <li>Comprehensive Warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 row gx-5 flex-row-reverse pt-5">
        <div className="col-lg-6">
          <div className="image d-flex justify-content-center px-5">
            <img
              className="img-fluid"
              src="../image/co-nen-mua-laptop-gaming-de-lap-trinh.jpg"
              alt="Gaming Laptop"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="item-main d-flex justify-content-center px-5">
            <div className="item">
              <h4 className="text-light">Ultimate Gaming Experience</h4>
              <p className="text-light">
                Our gaming laptops provide the ultimate gaming experience with
                top-notch specs:
              </p>
              <hr className="py-3 text-light" />
              <ul className="list-text text-light fw-500">
                <li>High-End Graphics Cards</li>
                <li>Fast Refresh Rate Displays</li>
                <li>Customizable RGB Lighting</li>
                <li>Advanced Cooling Systems</li>
                <li>Enhanced Audio Quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container benefits">
    <h1 className="text-center text-light">Benefits</h1>
    <div className="row">
      <div className="col-lg-4" style={{ borderBottom: "1px solid #9d9d9d" }}>
        <div className="m-5">
          <img
            className="img_"
            
            src="../image/1.gif"
            alt="Benefit 1"
          />
          <h6 className="text-light pt-4">Extended Warranty</h6>
          <p className="text-light">
            Get peace of mind with our extended warranty on all laptop
            purchases.
          </p>
        </div>
      </div>
      <div
        className="col-lg-4"
        style={{
          borderLeft: "1px solid #9d9d9d",
          borderBottom: "1px solid #9d9d9d",
          borderRight: "1px solid #9d9d9d"
        }}
      >
        <div className="m-5">
          <img
            className="img_"
            
            src="../image/2.gif"
            alt="Benefit 2"
          />
          <h6 className="text-light pt-4">24/7 Customer Support</h6>
          <p className="text-light">
            Our customer support team is available 24/7 to assist you with any
            issues.
          </p>
        </div>
      </div>
      <div className="col-lg-4" style={{ borderBottom: "1px solid #9d9d9d" }}>
        <div className="m-5">
          <img
            className="img_"
            
            src="../image/3.gif"
            alt="Benefit 3"
          />
          <h6 className="text-light pt-4">Free Shipping</h6>
          <p className="text-light">
            Enjoy free shipping on all orders, no matter the size.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="m-5">
          <img
            className="img_"
            
            src="../image/4.gif"
            alt="Benefit 4"
          />
          <h6 className="text-light pt-4">Easy Returns</h6>
          <p className="text-light">
            Hassle-free returns within 30 days of purchase.
          </p>
        </div>
      </div>
      <div
        className="col-lg-4"
        style={{
          borderLeft: "1px solid #9d9d9d",
          borderRight: "1px solid #9d9d9d"
        }}
      >
        <div className="m-5">
          <img
            className="img_"
            
            src="../image/5.gif"
            alt="Benefit 5"
          />
          <h6 className="text-light pt-4">Financing Options</h6>
          <p className="text-light">
            Flexible financing options to fit your budget.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="m-5">
          <img
            className="img_"
            
            src="../image/6.gif"
            alt="Benefit 6"
          />
          <h6 className="text-light pt-4">Expert Advice</h6>
          <p className="text-light">
            Get expert advice from our knowledgeable staff to find the perfect
            laptop for you.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container pricing">
    <div className="row">
      <div className="col-lg-4">
        <div className="p-4">
          <div className="d-flex align-items-center">
            <img
              
              src="../image/basic.jpg"
              alt="Basic Plan"
            />
            <h2 className="ms-4">Basic</h2>
          </div>
          <p className="pt-3">
            Perfect for personal use and small projects. Get started with our
            basic laptop plan.
          </p>
          <div className="text-center p-3">
            <span>
              $<span className="fw-bold h3">499</span>
            </span>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-warning w-100 py-3">Buy Now</button>
          </div>
          <hr />
          <ul className="list-pricing mt-4" style={{ paddingLeft: 0 }}>
            <li>
              <i className="bi bi-check-circle-fill" /> Intel Core i3 Processor
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> 8GB RAM
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> 256GB SSD
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> 13.3" Full HD Display
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 act">
        <div className="p-4">
          <div className="d-flex align-items-center">
            <img
              
              src="../image/Remove-bg.ai_1718355310614.png"
              alt="Standard Plan"
            />
            <h2 className="ms-4">Standard</h2>
          </div>
          <p className="pt-3">
            Ideal for students and professionals needing more power and storage.
          </p>
          <div className="text-center p-3">
            <span>
              $<span className="fw-bold h3">799</span>
            </span>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-warning w-100 py-3">Buy Now</button>
          </div>
          <hr />
          <ul className="list-pricing mt-4" style={{ paddingLeft: 0 }}>
            <li>
              <i className="bi bi-check-circle-fill" /> Intel Core i5 Processor
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> 16GB RAM
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> 512GB SSD
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> 15.6" Full HD Display
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="p-4">
          <div className="d-flex align-items-center">
            <img
              
              src="../image/primeum.jpg"
              alt="Premium Plan"
            />
            <h2 className="ms-4">Premium</h2>
          </div>
          <p className="pt-3">
            For power users and professionals needing top-tier performance and
            features.
          </p>
          <div className="text-center p-3">
            <span>
              $<span className="fw-bold h3">1299</span>
            </span>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-warning w-100 py-3">Buy Now</button>
          </div>
          <hr />
          <ul className="list-pricing mt-4" style={{ paddingLeft: 0 }}>
            <li>
              <i className="bi bi-check-circle-fill" /> Intel Core i7 Processor
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> 32GB RAM
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> 1TB SSD
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> 17" 4K UHD Display
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  )
}

export default HomePage
