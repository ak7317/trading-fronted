import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleKiteClick = () => {
     console.log("Kite clicked"); 
  const token = localStorage.getItem("token");

  if (token) {
    //  login hai
    //  window.location.href = "http://localhost:3001";
     window.location.href = "trading-dashboard-i33145cvo-ak7317s-projects.vercel.app";
  } else {
    //  login nhi
    // window.location.href="http://localhost:3000/login";
     window.location.href = "trading-fronted-coqo-dvsqb7ppt-ak7317s-projects.vercel.app/login";
   
  }
};  
    return ( 
   <div className='container'>
    <nav
     className="navbar navbar-expand-lg  border-bottom" 
     style={{backgroundColor: "#fff"}}
     >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src='media/images/logo.svg' style={{width:'60%'}} alt="logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form className="d-flex">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">
            About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/product">
            Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to="/pricing">
            Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/support">
            Support</Link>

            
        </li>
        {/* //authentication */}
         <li className="nav-item">
          <button type="button" className="nav-link active" onClick={handleKiteClick}>
         Kite
       </button>
</li>
  
      </ul>
      </form>
    </div>
  </div>
</nav>
   </div>
);
}

export default Navbar;