import React from 'react'


const NavBar = (prop) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-${prop.Mode === 'dark'?'secondary':'dark'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{prop.webTitle}</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{prop.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">{prop.about}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
export default NavBar



