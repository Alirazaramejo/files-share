import React from 'react'
import Contact from './_utiles/Contact'

function Hero() {
  return (
    <div>
        <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
       <span className="text-primary">Upload, Save</span> and easily  <span className="text-primary">Share</span> your files in One Place
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-500">
       {Contact.desc}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-pink-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-pink-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero