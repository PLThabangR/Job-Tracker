import React from 'react'
import Search from '../Search/Search'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Job Tracker</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item" style={{float:'right'}}>
          <a className="nav-link" href="#">Post a job</a>
        </li>
       
       
      </ul>
      {/* Search component */}
     <Search/>
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar