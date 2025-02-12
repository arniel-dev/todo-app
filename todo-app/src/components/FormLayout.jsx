import React from "react";
import PropTypes from "prop-types";
function FormLayout({ children, title }) {
  return (
    <div className=" h-screen w-screen flex justify-center items-center dark:bg-gray-900">
      <div className="w-lg md:w-md sm:w-sm  grid gap-8">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h2 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
              {title}
            </h2>
            {children}
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
