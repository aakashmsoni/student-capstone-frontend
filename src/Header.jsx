import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Student Capstone Catalog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/capstoneindex">
                  All Students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CapstoneShow">
                  Student
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> |{" "}
      {localStorage.jwt === undefined ? (
        <>
          <a href="#signup">SignUp</a> |<a href="#login">Login</a>
        </>
      ) : (
        <a href="#logout">Logout</a>
      )} */}
    </header>
  );
}
