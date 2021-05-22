import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
      <h3 className="name">Photographer Shahadat</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="/home">Home</a>

        <a className="nav-link" href="/review">Order Reviews</a>
        <a className="nav-link" href="/inventory">Manage Inventory</a>
      </div>
    </div>
  </div>
</nav>
        </div>
  );
};

export default Navbar;