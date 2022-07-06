import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Link } from "gatsby"

// import * as styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo
      title="The home page"
      description="You can customize the SEO text here."
      image="/logo.png"
      pathname="/"
      // Boolean indicating whether this is an article:
      // article
    />
    {/* <section className={styles.wrapper}>
      <h1 className={styles.heading}>Welcome to Gatsby and Azure</h1>
      <div>
        <p>Gatsby is a good framework to upskill your React!</p>
        <p className="text-3xl">
          Though it may not look like much, it holds all the essentials you'll
          need to get started building your own sites with Gatsby.
        </p>
        <p>
          This Demo site will transform in many ways and will be utilized to
          build many great things. We will use this starter as a skeleton to
          experiment on other features of Gatsby.
        </p>{" "}
        <p>
          A Final note, Minor changes can be considered from time to time
          although we view this as the end form.
        </p>
      </div>
    </section> */}

    {/* <!-- ======================================= -->
  <!-- overview ======================================= -->
  <!-- ======================================= --> */}
    <div id="about" className="relative bg-purple-700 lg:pt-12 pb-24">
      {/* <!-- gray bar to help section transition --> */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gray-300"></div>

      <div className="relative container mx-auto px-10">
        <h2 className="mb-10 text-4xl lg:text-6xl font-bold text-purple-100">
          Writing CSS is tough stuff!
        </h2>

        <div className="lg:flex lg:space-x-16 space-y-8 lg:space-y-0">
          {/* <!-- left column --> */}
          <div className="lg:w-2/3 bg-white p-12 lg:p-16 rounded shadow-2xl text-gray-800 text-lg space-y-8 leading-relaxed">
            <p>
              Tailwind makes writing CSS easier and lets us customize our
              designs faster than any other CSS framework. If you want a CSS
              framework that has pre-built components, then Tailwind may not be
              for you. If you want a CSS framework that lets you design quickly
              and customize your site, then{" "}
              <strong className="font-bold text-teal-500">
                Tailwind is gonna be a lot of fun
              </strong>
              .
            </p>
            <p>
              After using Bulma to build{" "}
              <Link
                to="https://scotch.io"
                className="text-blue-500 hover:underline"
              >
                Scotch.io
              </Link>
              , my CSS files became littered with my own{" "}
              <code className="inline-block px-1 rounded bg-gray-200 text-red-700 text-xs font-mono">
                !important
              </code>{" "}
              classNames to override the framework's styles. Tailwind doesn't
              have the{" "}
              <code className="inline-block px-1 rounded bg-gray-200 text-red-700 text-xs font-mono">
                !important
              </code>{" "}
              problem since all our elements are designed on the fly.
            </p>
            <p>
              <strong className="font-bold">Important Note</strong>: Tailwind
              lets us design quickly, but this doesn't mean that you don't need
              CSS knowledge however. To use Tailwind, you need to have a good
              understanding of CSS properties. In this course, we will learn
              Tailwind and we'll also learn CSS concepts to create good looking
              designs.{" "}
              <strong className="font-bold">
                Tailwind is the ultimate CSS shorthand
              </strong>
              , but we still need to learn the CSS, which we'll do in this
              course.
            </p>
            <p className="relative text-3xl italic">
              <span className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 scale-150 text-purple-600 text-6xl opacity-50">
                "
              </span>
              This isn't just a Tailwind course. This is also a "learn how to
              design with CSS" course.
            </p>
            <p>
              The hardest things about learning Tailwind is memorizing the
              classNamees and also knowing which classNamees go well together.
              We'll be writing a lot of Tailwind in this course so that the
              repetition will help us commit Tailwind classNamees to memory.
            </p>
          </div>

          {/* <!-- right column --> */}
          <div className="flex-grow space-y-4 text-lg italic">
            <div className="p-10 rounded-lg bg-purple-800 text-purple-200">
              What classNamees should I use?
            </div>
            <div className="p-10 rounded-lg bg-purple-800 text-purple-200">
              How do I make things look good?
            </div>
            <div className="p-10 rounded-lg bg-purple-800 text-purple-200">
              My design looks basic?
            </div>
            <div className="p-10 rounded-lg bg-purple-800 text-purple-200">
              How do I do responsive?
            </div>
            <div className="p-10 rounded-lg bg-purple-800 text-purple-200">
              My typography looks bad?
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- ======================================= -->
  <!-- about me ======================================= -->
  <!-- ======================================= --> */}
    <div className="lg:pt-12 pb-24 bg-gray-300 lg:text-center">
      <div className="container mx-auto px-10">
        <h2 className="mb-3 text-3xl lg:text-6xl font-bold text-teal-900">
          Some Tailwind Videos I've Done
        </h2>

        <p className="mb-12 lg:text-xl leading-loose">
          Hey there! My name is{" "}
          <Link
            to="https://twitter.com/chris__sev"
            className="text-blue-500 hover:underline"
          >
            Chris Sev
          </Link>{" "}
          and I founded a web dev tutorial site Scotch.io. We were able to grow
          to 4M monthly pageviews and $300,000 yearly revenue. Scotch.io was
          acquired by DigitalOcean in November 2019. Nowadays I'm in search of
          the best ways to develop and design a business. Hope you enjoy this
          course and my other one MakeReactApps.com.
        </p>

        {/* <!-- videos --> */}
        <div className="lg:flex lg:space-x-8 text-left space-y-8 lg:space-y-0">
          <div className="lg:w-1/2 bg-white border-2 border-gray-700 rounded shadow-xl">
            <p className="text-lg p-4 text-gray-700">
            I'll show you some of the exciting new features added in Tailwind CSS v3.0
            </p>

            <iframe
              title="Getting Started with Tailwind on scotch.io"
              className="w-full rounded-b"
              height="315"
              src="https://www.youtube.com/embed/mSC6GwizOag"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="lg:w-1/2 bg-white border-2 border-gray-700 rounded shadow-xl">
            <p className="text-lg p-4 text-gray-700">
            Tailwind CSS v3.0 is here, performance gains and workflow improvements.
            </p>

            <iframe
              title="Build Your 1st Tailwind Site"
              className="w-full rounded-b"
              height="315"
              src="https://www.youtube.com/embed/TmWIrBPE6Bc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- ======================================= -->
  <!-- what youll learn ======================================= -->
  <!-- ======================================= --> */}
    <div id="learn" className="py-32 bg-gray-200 text-gray-700">
      <div className="container mx-auto px-10">
        {/* <!-- header --> */}
        <div className="relative">
          <h2 className="mb-24 text-4xl lg:text-6xl text-center font-bold text-purple-900">
            What You'll Learn In This Course
          </h2>
          <div className="absolute top-0 left-0 w-1/3 h-2 rounded bg-gradient-to-r from-blue-400 to-purple-600 transform -translate-y-4"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-2 rounded bg-gradient-to-r from-purple-400 to-blue-600 transform translate-y-4"></div>
        </div>

        {/* <!-- grid area of things --> */}
        <div className="lg:grid grid-cols-6 gap-10 space-y-8 lg:space-y-0">
          <div className="col-span-2 border border-gray-700 rounded shadow-lg">
            <div className="p-4 flex items-center justify-between relative border-b border-gray-700">
              <h3 className="font-bold text-lg">
                How to use Tailwind classNamees
              </h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <p className="p-4">
              We'll dive into the most important Tailwind classNamees and use
              them a TON.
            </p>
          </div>
          <div className="col-span-2 border border-gray-700 rounded shadow-lg">
            <div className="p-4 flex items-center justify-between relative border-b border-gray-700">
              <h3 className="font-bold text-lg">
                How to use Tailwind classNamees
              </h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <p className="p-4">
              We'll dive into the most important Tailwind classNamees and use
              them a TON.
            </p>
          </div>
          <div className="col-span-2 border border-gray-700 rounded shadow-lg">
            <div className="p-4 flex items-center justify-between relative border-b border-gray-700">
              <h3 className="font-bold text-lg">
                How to use Tailwind classNamees
              </h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <p className="p-4">
              We'll dive into the most important Tailwind classNamees and use
              them a TON.
            </p>
          </div>
          <div className="col-span-3 border border-gray-700 rounded shadow-lg">
            <div className="p-4 flex items-center justify-between relative border-b border-gray-700">
              <h3 className="font-bold text-lg">
                How to use Tailwind classNamees
              </h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <p className="p-4">
              We'll dive into the most important Tailwind classNamees and use
              them a TON.
            </p>
          </div>
          <div className="col-span-3 border border-gray-700 rounded shadow-lg">
            <div className="p-4 flex items-center justify-between relative border-b border-gray-700">
              <h3 className="font-bold text-lg">
                How to use Tailwind classNamees
              </h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <p className="p-4">
              We'll dive into the most important Tailwind classes and use them a
              TON.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- ======================================= -->
  <!-- what we'll build ======================================= -->
  <!-- ======================================= --> */}
    <div id="build" className="py-24 bg-gray-300 text-gray-600">
      <div className="container mx-auto px-10">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-5xl text-gray-800">What We'll Build</h2>
          <p className="text-lg text-gray-700">
            These components are things you'll have to create in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="flex bg-white rounded shadow">
            <div className="w-1/5 flex items-center justify-center text-3xl bg-red-500 rounded-l">
              😍
            </div>
            <div className="p-4">Buttons</div>
          </div>
          <div className="flex bg-white rounded shadow">
            <div className="w-1/5 flex items-center justify-center text-3xl bg-green-500 rounded-l">
              😍
            </div>
            <div className="p-4">Cards</div>
          </div>
          <div className="flex bg-white rounded shadow">
            <div className="w-1/5 flex items-center justify-center text-3xl bg-purple-500 rounded-l">
              😍
            </div>
            <div className="p-4">Footer</div>
          </div>
          <div className="flex bg-white rounded shadow">
            <div className="w-1/5 flex items-center justify-center text-3xl bg-blue-500 rounded-l">
              😍
            </div>
            <div className="p-4">Header</div>
          </div>
          <div className="flex bg-white rounded shadow">
            <div className="w-1/5 flex items-center justify-center text-3xl bg-red-500 rounded-l">
              😍
            </div>
            <div className="p-4">Buttons</div>
          </div>
          <div className="flex bg-white rounded shadow">
            <div className="w-1/5 flex items-center justify-center text-3xl bg-green-500 rounded-l">
              😍
            </div>
            <div className="p-4">Cards</div>
          </div>
          <div className="flex bg-white rounded shadow">
            <div className="w-1/5 flex items-center justify-center text-3xl bg-purple-500 rounded-l">
              😍
            </div>
            <div className="p-4">Footer</div>
          </div>
          <div className="flex bg-white rounded shadow">
            <div className="w-1/5 flex items-center justify-center text-3xl bg-blue-500 rounded-l">
              😍
            </div>
            <div className="p-4">Header</div>
          </div>
        </div>
      </div>
    </div>
    {/*<!-- ======================================= -->
  <!-- pricing ======================================= -->
  <!-- ======================================= --> */}
    <div id="pricing" className="relative bg-blue-600 py-32 text-blue-200">
      {/* <!-- gray box for the top section --> */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gray-300"></div>

      <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center lg:space-x-8 space-y-4 lg:space-y-0">
        {/* <!-- left box --> */}
        <div className="order-2 lg:order-1 lg:w-1/3 pt-12 text-center lg:text-right space-y-2 text-xl">
          <p>
            <strong className="font-bold text-white">XY videos</strong> at a
            smooth pace
          </p>
          <p>
            <strong className="font-bold text-white">AB hours</strong> of
            learning + building
          </p>
          <p>
            <strong className="font-bold text-white">Source code</strong> and
            CodePens
          </p>
        </div>

        {/* <!-- pricing box --> */}
        <div className="order-1 lg:order-2 relative w-full lg:w-1/3 bg-white p-8 text-gray-800 rounded shadow-2xl border-8 border-purple-700 text-center space-y-4 transform hover:scale-105 transition duration-500">
          {/* <!-- showoff beam thingy --> */}
          <div className="absolute top-0 inset-x-0 transform -translate-y-full flex items-end justify-center space-x-8">
            <div className="w-2 h-16 mb-8 bg-red-500 rounded transform -rotate-45 origin-bottom"></div>
            <div className="w-2 h-24 mb-8 bg-yellow-500 rounded"></div>
            <div className="w-2 h-16 mb-8 bg-green-500 rounded transform rotate-45 origin-bottom"></div>
          </div>

          <h4 className="text-gray-600 text-sm">
            Start Tailwind<span className="italic">-ing</span>!
          </h4>
          <div className="text-6xl text-purple-800 font-bold">
            <span className="opacity-25">$</span>47
          </div>
          <Link
            to="#"
            className="block p-3 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 text-yellow-800 hover:text-yellow-900 rounded shadow hover:shadow-2xl transition duration-300"
          >
            Buy the Course
          </Link>
        </div>

        {/* <!-- right box --> */}
        <div className="order-3 lg:w-1/3 pt-12 space-y-2 text-center lg:text-left text-xl">
          <p>
            Use the code{" "}
            <strong className="font-bold text-white">for your projects</strong>
          </p>
          <p>
            Access to <strong className="font-bold text-white">Discord</strong>{" "}
            for support
          </p>
          <p>
            <strong className="font-bold text-white">Lifetime</strong> refund
            guarantee
          </p>
        </div>
      </div>
    </div>
    {/* <!-- ======================================= -->
  <!-- modules/videos ======================================= -->
  <!-- ======================================= --> */}
    <div className="py-32 bg-gradient-to-b from-gray-700 to-gray-800">
      <div className="container mx-auto px-10">
        <div className="mb-10 text-center space-y-4">
          <h2 className="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200 font-bold">
            The Modules/Videos
          </h2>
          <p className="text-2xl text-gray-100">
            9 hours of Tailwind learning in 18 modules and 73 videos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-gray-400">
          <div className="p-6 bg-gray-800 bg-opacity-75 flex justify-between items-center rounded-t-lg">
            <h4 className="text-3xl">Getting Started</h4>
            <div className="flex space-x-8 text-center text-xl font-bold">
              <div>
                6 <span className="block text-sm font-normal">videos</span>
              </div>
              <div>
                33 <span className="block text-sm font-normal">minutes</span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-75 flex justify-between items-center">
            <h4 className="text-3xl">Main Concepts</h4>
            <div className="flex space-x-8 text-center text-xl font-bold">
              <div>
                11 <span className="block text-sm font-normal">videos</span>
              </div>
              <div>
                67 <span className="block text-sm font-normal">minutes</span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-800 flex justify-between items-center rounded-b-lg">
            <h4 className="text-3xl">Layout</h4>
            <div className="flex space-x-8 text-center text-xl font-bold">
              <div>
                4 <span className="block text-sm font-normal">videos</span>
              </div>
              <div>
                37 <span className="block text-sm font-normal">minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- ======================================= -->
  <!-- faq ======================================= -->
  <!-- ======================================= --> */}
    <div id="faq" className="bg-gray-800 py-32 text-gray-400">
      <div className="container mx-auto px-10">
        <h2 className="mb-12 text-3xl text-center font-bold">
          Frequently Asked Questions
        </h2>

        {/* <!-- grid of questions --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* <!-- question --> */}
          <div className="p-8 border-2 border-gray-500 rounded-lg">
            <h3 className="mb-3 text-gray-200 font-bold text-xl">
              Is there course support?
            </h3>
            <p>
              Yes! Let's chat in{" "}
              <Link to="#" className="text-blue-400 hover:underline">
                Discord
              </Link>
            </p>
          </div>

          {/* <!-- question --> */}
          <div className="p-8 border-2 border-gray-500 rounded-lg">
            <h3 className="mb-3 text-gray-200 font-bold text-xl">
              Is there course support?
            </h3>
            <p>
              Yes! Let's chat in{" "}
              <Link                
                to="#" className="text-blue-400 hover:underline">Discord
              </Link>
            </p>
          </div>

          {/* <!-- question --> */}
          <div className="p-8 border-2 border-gray-500 rounded-lg">
            <h3 className="mb-3 text-gray-200 font-bold text-xl">
              Is there course support?
            </h3>
            <p>
              Yes! Let's chat in{" "}
              <Link              
                to="#" className="text-blue-400 hover:underline">Discord
              </Link>
            </p>
          </div>

          {/* <!-- question --> */}
          <div className="p-8 border-2 border-gray-500 rounded-lg">
            <h3 className="mb-3 text-gray-200 font-bold text-xl">
              Is there course support?
            </h3>
            <p>
              Yes! Let's chat in{" "}
              <Link                
                to="#" className="text-blue-400 hover:underline">Discord
              </Link>
            </p>
          </div>

          {/* <!-- question --> */}
          <div className="p-8 border-2 border-gray-500 rounded-lg">
            <h3 className="mb-3 text-gray-200 font-bold text-xl">
              Is there course support?
            </h3>
            <p>
              Yes! Let's chat in{" "}
              <Link                
                to="#" className="text-blue-400 hover:underline">Discord
              </Link>
            </p>
          </div>

          {/* <!-- question --> */}
          <div className="p-8 border-2 border-gray-500 rounded-lg">
            <h3 className="mb-3 text-gray-200 font-bold text-xl">
              Is there course support?
            </h3>
            <p>
              Yes! Let's chat in{" "}
              <Link                
                to="#" className="text-blue-400 hover:underline">Discord
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
