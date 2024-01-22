import "./navbar.scss";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
       
        <div className="wrapper">
          <span>
            React Folio
          </span>




          <div className="nav-menu">
            <a className="nav-item">Home</a>
            <a className="nav-item">About</a>
            <a className="nav-item">Services</a>
            <a className="nav-item">Portfolio</a>
            <a className="nav-item">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
