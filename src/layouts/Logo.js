/* eslint-disable jsx-a11y/alt-text */
// import { ReactComponent as LogoDark } from "../assets/images/logos/adminpro.svg";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="align-items-center d-flex gap-2 text-decoration-none">
      <img src="https://play-lh.googleusercontent.com/1ilSkBLu0vJwY8b6McwNaEer3tjaBPxFJoOFLlkqvW0HlxSue2mbJxTcUwbtZIsWE1M=w240-h480-rw" width={'50px'} />
      <span className="fs-4 fw-bold text-dark">BOOKING DEI</span>
    </Link>
  );
};

export default Logo;
