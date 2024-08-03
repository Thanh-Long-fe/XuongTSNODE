import React from 'react'

const Header = () => {
 
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      Client Page
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Trang chủ
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sản phẩm
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Danh mục
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Đơn hàng
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Người dùng
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Quản lý comment
          </a>
        </li>
      </ul>
      <div className="person">
        <span className="name">Name</span>
        <i className="bi bi-person-circle" />
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header
