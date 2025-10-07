function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Pacific <span>Travel Agency</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
            <li className="nav-item"><a href="destination.html" className="nav-link">Destination</a></li>
            <li className="nav-item"><a href="hotel.html" className="nav-link">Hotel</a></li>
            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const container = document.getElementById("navbar-root");
const root = ReactDOM.createRoot(container);
root.render(<Navbar />);
