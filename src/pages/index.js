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

      <h2 className="mb-3 text-3xl lg:text-6xl font-bold text-teal-900">Some Tailwind Videos I've Done</h2>

      <p className="mb-12 lg:text-xl leading-loose">Hey there! My name is <Link to="https://twitter.com/chris__sev"
          className="text-blue-500 hover:underline">Chris Sev</Link> and I founded a web dev
        tutorial site Scotch.io. We were able to grow to 4M monthly
        pageviews and $300,000 yearly revenue. Scotch.io was acquired by DigitalOcean in November 2019. Nowadays I'm in
        search
        of the best ways to develop and design a business. Hope you enjoy this course and my other one
        MakeReactApps.com.</p>

      {/* <!-- videos --> */}
      <div className="lg:flex lg:space-x-8 text-left space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 bg-white border-2 border-gray-700 rounded shadow-xl">
          <p className="text-lg p-4 text-gray-700">Getting Started with Tailwind on scotch.io and a 15
            minute starter YouTube video.</p>

          <iframe title="Getting Started with Tailwind on scotch.io" className="w-full rounded-b" height="315" src="https://www.youtube.com/embed/6zIuAyLZPH0" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="lg:w-1/2 bg-white border-2 border-gray-700 rounded shadow-xl">
          <p className="text-lg p-4 text-gray-700">I did a Build Your 1st Tailwind Site for Traversy Media on YouTube also.
          </p>

          <iframe title="Build Your 1st Tailwind Site" className="w-full rounded-b" height="315" src="https://www.youtube.com/embed/6zIuAyLZPH0" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>

    </div>
  </div>


  </Layout>
)

export default IndexPage
