import React from "react";
import { Link } from "gatsby"

// import * as styles from "./footer.module.css";

const Footer = ({ siteTitle }) => (
  // <footer className={styles.colophon}>
  //   © {new Date().getFullYear()} {siteTitle}
  // </footer>
  // <!-- ======================================= -->
  // <!-- footer/newsletter ======================================= -->
  // <!-- ======================================= -->
  <div className="relative py-24 bg-gradient-to-br from-gray-100 to-gray-300 text-gray-600">

    {/* <!-- circles --> */}
    <div className="absolute top-0 left-0 transform translate-y-6 translate-x-6">
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 opacity-50"></div>
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 opacity-50 ml-12">
      </div>
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-red-100 to-red-200 opacity-50 ml-6 mt-12">
      </div>
    </div>

    <div className="relative container mx-auto px-10">

      {/* <!-- top footer --> */}
      <div className="lg:flex justify-between space-y-12 lg:space-y-0">
        {/* <!-- newsletter --> */}
        <div className="flex flex-col justify-center">
          <h4
            className="mb-4 font-bold text-2xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
            Get updates on this course</h4>
          <form action="" method="POST" className="flex">
            <input type="email" name="email" placeholder="super@secret.com"
              className="w-full p-3 rounded-l outline-none border-2 border-r-0 border-gray-400 focus:border-purple-400 placeholder-gray-300" />
            <button className="p-3 bg-purple-400 text-purple-100 rounded-r">Subscribe</button>
          </form>
        </div>
        {/* <!-- links --> */}
        <div className="text-center lg:text-right md:flex md:justify-center md:space-x-8 space-y-8 md:space-y-0">
          <div className="space-y-2">
            <p className="mb-3 font-bold text-gray-400 uppercase tracking-widest">Company</p>
            <Link to="#" className="block hover:text-gray-800 hover:underline">About</Link>
            <Link to="#" className="block hover:text-gray-800 hover:underline">Blog</Link>
            <Link to="#" className="block hover:text-gray-800 hover:underline">Careers</Link>
            <Link to="#" className="block hover:text-gray-800 hover:underline">Careers</Link>
          </div>
          <div className="space-y-2">
            <p className="mb-3 font-bold text-gray-400 uppercase tracking-widest">Company</p>
            <Link to="#" className="block hover:text-gray-800 hover:underline">About</Link>
            <Link to="#" className="block hover:text-gray-800 hover:underline">Blog</Link>
            <Link to="#" className="block hover:text-gray-800 hover:underline">Careers</Link>
            <Link to="#" className="block hover:text-gray-800 hover:underline">Careers</Link>
          </div>
          <div className="space-y-2">
            <p className="mb-3 font-bold text-gray-400 uppercase tracking-widest">Company</p>
            <Link to="#" className="block hover:text-gray-800 hover:underline">About</Link>
            <Link to="#" className="block hover:text-gray-800 hover:underline">Blog</Link>
            <Link to="#" className="block hover:text-gray-800 hover:underline">Careers</Link>
            <Link to="#" className="block hover:text-gray-800 hover:underline">Careers</Link>
          </div>
        </div>
      </div>

      {/* <!-- bottom footer --> */}
      <div
        className="pt-4 mt-16 md:flex justify-between border-t border-gray-300 text-sm text-center md:text-left space-y-4 md:space-y-0">
        {/* <!-- copyright --> */}
        <div>Copyright &copy; {(new Date().getFullYear())}</div>
        {/* <!-- links --> */}
        <div className="space-x-4">
          <Link to="#">Discord</Link>
          <Link to="https://twitter.com/chris__sev">Twitter</Link>
          <Link to="#">YouTube</Link>
        </div>
      </div>

    </div>
  </div>  
);

export default Footer;
