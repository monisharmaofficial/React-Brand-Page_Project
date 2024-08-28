 const Navigation = () =>{

    return(
        <div>
        <nav className="container">
          <div className="brand-logo">
            <img src="../public/images/brand_logo.png" alt="logo Image" />
          </div>
  
          <ul>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
  
          <button className="btn">Login</button>
        </nav>
      </div>
    )

 }
 export default Navigation;