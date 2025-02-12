import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function FormLayout({ children, title }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
      <div className="grid gap-8">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-6 2xl:p-6 lg:p-6 md:p-6 sm:p-2 m-2">
            <h2 className="pt-0 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
              {title}
            </h2>
            {children}
            <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
              <p className="cursor-default">
                By signing in, you agree to our
                <Link className="group text-blue-400 transition-all duration-100 ease-in-out">
                  <span className="m-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Terms
                  </span>
                </Link>
                and
                <Link className="group text-blue-400 transition-all duration-100 ease-in-out">
                  <span className="m-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Privacy Policy
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
FormLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default FormLayout;
