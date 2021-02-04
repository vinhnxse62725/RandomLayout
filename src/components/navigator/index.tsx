import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { SearchOutlined } from "@ant-design/icons";
import styles from "./navigator.module.scss";
const NavBar: React.FC = () => {
  return (
    <>
      <nav
        className={`flex flex-wrap items-center justify-between p-4 ${styles.text_color}`}
      >
        <div className="lg:order-1 w-auto lg:w-1/5 lg:text-center">
          <a className="text-xl font-semibold font-heading uppercase" href="#">
            Room Furniture
          </a>
        </div>
        <div className="navbar-menu hidden lg:order-2 lg:block w-full lg:w-2/5 lg:text-right">
          <div className="hidden lg:inline-block lg:mr-10">
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10" href="#">
              Home
            </a>
            <a className="block lg:inline-block mt-4 lg:mt-0 mr-10" href="#">
              Product
            </a>
            <a className="block lg:inline-block mt-4 lg:mt-0  mr-10" href="#">
              About
            </a>
            <a
              className="block lg:inline-block mt-4 lg:mt-0  lg:mr-10"
              href="#"
            >
              Contact
            </a>
            <div className="hidden mt-4 lg:mt-0 lg:inline-flex lg:items-center">
              <SearchOutlined />
            </div>
          </div>
          {/* start hamburge menu */}
          <div className="block lg:inline-block">
            <button className="navbar-burger flex items-center py-2 px-3">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          {/* end hamburge menu */}
        </div>
      </nav>
    </>
  );
};
export default NavBar;
