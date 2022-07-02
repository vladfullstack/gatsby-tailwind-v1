import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, siteDescription, menuLinks }) => (
  // <header id="site-header" className={styles.masthead} role="banner">
  //   <div className={styles.masthead_info}>
  //     <Link to="/">
  //       <img
  //         src="/logov1.png"
  //         width="366"
  //         height="374"
  //         alt={siteTitle}
  //         className={styles.site_logo}
  //       />
  //       <div className={styles.site_title}>{siteTitle}</div>
  //       <div>{siteDescription}</div>
  //     </Link>
  //   </div>
  //   <Mainnav menuLinks={menuLinks} />
  // </header>

  // <!-- ======================================= -->
  // <!-- header/navigation ======================================= -->
  // <!-- ======================================= -->
  <div className="bg-gradient-to-br from-gray-100 to-gray-300">
    {/* <!-- left circle decoration --> */}
    <div className="absolute top-0 left-0 transform translate-x-4 translate-y-4">
      <div className="absolute bg-gradient-to-br from-teal-100 to-teal-200 w-64 h-64 rounded-full opacity-50"></div>
      <div className="absolute ml-10 mt-10 bg-gradient-to-br from-purple-100 to-purple-200 w-64 h-64 rounded-full opacity-50"></div>
      <div className="absolute ml-24 bg-gradient-to-br from-red-100 to-red-200 w-64 h-64 rounded-full opacity-50"></div>
    </div>

    {/* <!-- right circle decoration --> */}
    <div className="hidden lg:block absolute top-0 right-0 mr-48 transform -translate-x-64 translate-y-64">
      <div className="absolute bg-gradient-to-br from-teal-100 to-teal-200 w-64 h-64 rounded-full opacity-50"></div>
      <div className="absolute ml-10 mt-10 bg-gradient-to-br from-purple-100 to-purple-200 w-64 h-64 rounded-full opacity-50"></div>
      <div className="absolute ml-24 bg-gradient-to-br from-red-100 to-red-200 w-64 h-64 rounded-full opacity-50"></div>
    </div>

    {/* <!-- navigation --> */}
    <div className="relative text-gray-600">
      <div className="container mx-auto flex justify-between px-10 py-6">
        {/* <!-- left header section --> */}
        <div className="flex items-center space-x-4">
          <Link to="#" className="font-bold text-2xl text-teal-800">
            Beginner Tailwind
          </Link>
          <Link
            to="#about"
            className="hidden lg:inline-block hover:text-gray-900"
          >
            About
          </Link>
          <Link
            to="#learn"
            className="hidden lg:inline-block hover:text-gray-900"
          >
            What You'll Learn
          </Link>
          <Link
            to="#pricing"
            className="hidden lg:inline-block hover:text-gray-900"
          >
            Pricing
          </Link>
          <Link
            to="#faq"
            className="hidden lg:inline-block hover:text-gray-900"
          >
            FAQ
          </Link>
        </div>

        {/* <!-- right header section --> */}
        <div className="flex items-center space-x-4">
          <Link to="#" className="hover:text-gray-900">
            Login
          </Link>
          <Link
            to="#"
            className="hidden lg:inline-block p-3 bg-purple-300 hover:bg-purple-200 text-purple-700 hover:text-purple-600 rounded shadow hover:shadow-xl transition duration-500"
          >
            Get the Course
          </Link>
        </div>
      </div>
    </div>

    {/* <!-- ======================================= -->
    <!-- hero ======================================= -->
    <!-- ======================================= --> */}
    <div className="relative">
      {/* <!-- purple bar to help with the section transition --> */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-purple-700"></div>

      <div className="container mx-auto px-10 py-24 text-center">
        {/* <!-- heading --> */}
        <h1 className="opacity-20 font-fun mb-4 text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
            Love You{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-600 to-purple-500">
            Mira
          </span>
        </h1>

        {/* <!-- paragraph --> */}
        <p className="mb-8 text-lg lg:text-2xl text-gray-700">
          Make good looking designs quickly. All without a single line of custom
          CSS.
        </p>

        {/* <!-- big button / call to action --> */}
        <Link
          to="#"
          className="inline-block mb-16 lg:mb-32 py-3 px-12 rounded shadow-lg hover:shadow-2xl 
          bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 text-purple-100 
          hover:text-white font-bold text-lg tracking-wide transition duration-500"
        >
          Get the Course
        </Link>

        {/* <!-- teaser image --> */}
        <div className="relative">
          <img
            src="https://i.imgur.com/wysbBMS.png"
            alt="Teaser Illustration"
            className="rounded-lg shadow-2xl border-4 border-purple-400"
          />

          {/* <!-- teaser image info box --> */}
          <div
            className="lg:absolute top-0 right-0 bg-yellow-100 lg:transform lg:translate-x-4 
          lg:-translate-y-4 text-left py-4 px-8 mt-8 lg:mt-0 rounded shadow-lg text-yellow-800 
          border-t-4 border-yellow-500"
          >
            <p>
              <strong className="font-bold">
                We'll create BeginnerTailwind.com
              </strong>{" "}
              <span className="opacity-50">(it's the site you're on now)</span>
            </p>
            <p>We'll do it all without a single line of custom CSS!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
  menuLinks: [],
}

export default Header
