import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <>
        <Navbar />
        <section className="text-gray-600 bg-wave bg-no-repeat bg-bottom" id="a-propos">
  <div className=" w-4/5 mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="mb-10" alt="hero" src="../../images/developer.gif" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                 Salut, Je suis <span className="uppercase text-yellow-500">Mamadou SY</span>.
        <br className="hidden lg:inline-block " /> Je suis un  developpeur web Fullstack.
      </h1>
    </div>
  </div>
</section>
        </>
    )
}

export default Header
