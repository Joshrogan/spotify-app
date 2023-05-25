import { Outlet, Link } from "@tanstack/router";

const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default Root;
