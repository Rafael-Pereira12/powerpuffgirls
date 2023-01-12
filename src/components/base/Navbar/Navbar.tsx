import { Link } from "react-router-dom";
import { _Navbar } from "./_Navbar";

export const Navbar = () => {
  return (
    <_Navbar>
      <figure>
        <img src="" alt="" />
      </figure>
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
    </_Navbar>
  );
};
