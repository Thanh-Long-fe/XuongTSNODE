import React, { useEffect, useState } from 'react'

const HeaderPage = () => {
  const [info, setInfo] = useState('')
 useEffect(() => {
  if (JSON.parse(localStorage.getItem('user'))?.user?.email) {
    setInfo(JSON.parse(localStorage.getItem('user')).user.email)
  }
 },[])
  function logout(){
    localStorage.removeItem('user')
    setInfo('')
  }
  return (
    <>
    <header className="header">
  <nav className="nav_menu">
    <div className="logo">
      <img src="../image/Logo.png" alt="" />
    </div>
    <ul className="menu">
      <li className="menu-item">
        <a href="/products">Product</a>
      </li>
      <li className="menu-item">
        <a href="">Pricing</a>
      </li>
      <li className="menu-item">
        <a href="">Contact us</a>
      </li>
      <li className="menu-item">
        <a href="/login">About</a>
      </li>
      <li className="menu-item">
        <a href="/register">Register</a>
      </li>
    </ul>
    <div className="button-login fw-bold">
      {info ? 
      <span className='info'>{info}  
      <i className="bi bi-person-circle"></i><span className='logout' onClick={logout}>Logout</span></span> : <a href="/login">Login</a> }
     
      <a href="#" className="btn btn-dark mx-4">
        Book a Demo
      </a>
    </div>
  </nav>
</header>

    </>
  )
}

export default HeaderPage
