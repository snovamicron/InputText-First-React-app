import React from 'react'
// import { Outlet, Link } from "react-router-dom";

const NavBar = (prop) => {
  const {home, Mode, webTitle, about} = prop
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-${ Mode === 'dark'?'secondary':'dark'}`}>
        <div className="container-fluid">
          <a className="navbar-brand"  href= "/#">{ webTitle} </a>
          {/* <Link className="navbar-brand"  to= "/ ">{ webTitle} </Link> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link active" aria-current="page"  href="#/">{home} </a>
              {/* <Link className="nav-link active" aria-current="page"  to="/">{home} </Link> */}
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">{about}</a>
              {/* <Link className="nav-link" to="/about">{about}</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  )
}
export default NavBar



