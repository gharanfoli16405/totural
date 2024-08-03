import { Link, NavLink, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  return (
    <>
      <div className="flex h-screen">
        <nav className="bg-gray-300 me-8 px-9">
          <ul>
            <li className="mb-4 border-0 border-b-2 border-b-red-500">
              <NavLink
                to="/"
                // style={({ isActive }) => ({
                //   color: isActive ? "yellow" : "green",
                //   backgroundColor: isActive ? "blue" : "green",
                // })}
              >
                Home
              </NavLink>
            </li>
            <li className="mb-4 border-0 border-b-2 border-b-red-500">
              <NavLink to="/324/productList" state={{ name: "mohsen" }}>
                productList{" "}
              </NavLink>
            </li>
            <li className="mb-4 border-0 border-b-2 border-b-red-500">
              <NavLink to="/about" state={{ name: "mohsen" }}>
                About-Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ProtectedRoutes;
