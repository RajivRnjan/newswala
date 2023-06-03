import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const clickHandler = (e)=>{
    
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark " style={{
      position:"sticky",top:0,padding:"8px 0"}}>
      <div className="container-fluid ">
        <Link className="navbar-brand text-white" to="/home">
          NEWS Wala
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li  className="nav-item ">
              <Link onClick={clickHandler}
                className="nav-link active text-white home"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link onClick={clickHandler}
                className="nav-link active text-white general"
                aria-current="page"
                to="/general"
              >
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white business"
                aria-current="page"
                to="/business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white entertainment"
                aria-current="page"
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white health"
                aria-current="page"
                to="/health"
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white science"
                aria-current="page"
                to="/science"
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white sport"
                aria-current="page"
                to="sport"
              >
                Sport
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white technology"
                aria-current="page"
                to="/technology"
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
