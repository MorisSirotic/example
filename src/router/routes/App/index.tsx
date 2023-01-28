import { Breadcrumb } from "react-bootstrap";
import { Link, Outlet, useMatches } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { ResponsiveNavbar } from "../../../components/Navbar";

export const AppRoute = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ResponsiveNavbar />
      <Breadcrumbs />
      <RootPage />

      <Outlet />

      <Footer />
    </div>
  );
};
{
  /* <div>{pathname !== "/" ? <Outlet /> : <RootPage />}</div> */
}
const RootPage = () => {
  return (
    <div className="d-flex justify-content-between">
      <Link style={{ border: "1px solid black" }} to="/products">
        Products
      </Link>
      <Link style={{ border: "1px solid black" }} to="/carts">
        Carts
      </Link>
      <Link style={{ border: "1px solid black" }} to="/users">
        Users
      </Link>
    </div>
  );
};

export const Breadcrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match: any) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match: any) => match.handle.crumb(match.data));

  return (
    <Breadcrumb>
      {crumbs.map((crumb, indx) => (
        <Breadcrumb.Item key={indx} active>
          {crumb}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
