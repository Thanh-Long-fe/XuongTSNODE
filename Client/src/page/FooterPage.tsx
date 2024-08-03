import React from 'react'

const FooterPage = () => {
  return (
   <>
   <footer>
  <div className="container ctn-foot">
    <h1 className="text-center">All eCommerce CMS platforms supported</h1>
    <p className="text-center">
      Magento 2, Shopify, WooCommerce, BigCommerce, Opencart and more.
    </p>
    <div className="d-flex justify-content-between py-5 flex-wrap">
      <div className="item">
        <img src="../image/a.png" alt="" />
      </div>
      <div className="item">
        <img src="../image/aaaaa.png" alt="" />
      </div>
      <div className="item">
        <img src="../image/Ảnh chụp màn hình 2024-06-10 190436.png" alt="" />
      </div>
      <div className="item">
        <img src="../image/Ảnh chụp màn hình 2024-06-10 190446.png" alt="" />
      </div>
      <div className="item">
        <img src="../image/Ảnh chụp màn hình 2024-06-10 190451.png" alt="" />
      </div>
    </div>
  </div>
  <div className="container box">
    <div className="row">
      <div className="col-lg-6">
        <div className="d-flex justify-content-center align-items-center">
          <div className="py-5">
            <h2 className="text-light">Try Sortler For Free!</h2>
            <button className="btn btn-warning">Book a Demo</button>
            <ul>
              <li>
                <i className="bi bi-check-circle-fill"> </i>NO Coding needed,
                Plug-&amp;-Play.
              </li>
              <li>
                <i className="bi bi-check-circle-fill"> </i>All eCommerce
                platforms supported
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="d-flex justify-content-end">
          <img src="../image/Ảnh chụp màn hình 2024-06-10 191829.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="container footer-menu d-flex justify-content-between py-4">
    <div>
      <img src="../image/Logo.png" alt="" />
    </div>
    <ul className="d-flex">
      <li>Pricing</li>
      <li>Company</li>
      <li>Company</li>
      <li>Contact us</li>
    </ul>
    <div className="list d-flex">
      <i className="bi bi-instagram" />
      <i className="bi bi-facebook" />
    </div>
  </div>
</footer>

   </>
  )
}

export default FooterPage
