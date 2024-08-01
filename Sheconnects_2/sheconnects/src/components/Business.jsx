
import React from 'react'
import about from '../assets/aboutus.png';
function Business() {
  return (
    <>
    <div className="mb-6 p-4">
    <h1 className="text-2xl font-semibold text-gray-600 text-left"># General</h1>
    <div className="w-full border-t border-gray-300 my-4"></div>
    <div className="flex flex-wrap justify-center items-center gap-4 mt-8"></div>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex-1 h-3/4">
      <div className="mt-8 ml-8 mb-8">
        <span className="bg-pink-900 text-white py-1 px-3 rounded-full">Dec 20, 2022</span>
      </div>
      <div className="flex flex-col space-y-4 mt-4 ml-8">
        <div className="flex items-start">
          <img src={about} alt="Kellen" className="h-12 w-12 rounded-full shadow-md" />
          <div className="ml-4">
            <div className="flex items-center mb-1">
              <span className="font-semibold text-pink-900">Kellen</span>
              <span className="ml-4 text-xs text-gray-500">2:00 pm</span>
            </div>
            <p className="text-gray-600">Hello everyone! Please check this opportunity:</p>
            <img src={about} alt="Opportunity" className="mt-2 rounded-lg w-32 h-32" />
          </div>
        </div>
        <div className="flex items-start">
          <img src={about} alt="Lindah" className="h-12 w-12 rounded-full shadow-md" />
          <div className="ml-4">
            <div className="flex items-center mb-1">
              <span className="font-semibold text-pink-900">Lindah</span>
              <span className="ml-4 text-xs text-gray-500">2:03 pm</span>
            </div>
            <p className="text-gray-600">Thank you so much, Kellen!</p>
          </div>
        </div>
        <div className="flex items-start">
          <img src={about} alt="Keza" className="h-12 w-12 rounded-full shadow-md" />
          <div className="ml-4">
            <div className="flex items-center mb-1">
              <span className="font-semibold text-pink-900">Keza</span>
              <span className="ml-4 text-xs text-gray-500">2:03 pm</span>
            </div>
            <p className="text-gray-600">Thanks, Kellen!</p>
          </div>
        </div>
        <div className="flex items-start">
          <img src={about} alt="Lita" className="h-12 w-12 rounded-full shadow-md" />
          <div className="ml-4">
            <div className="flex items-center mb-1">
              <span className="font-semibold text-pink-900">Lita</span>
              <span className="ml-4 text-xs text-gray-500">2:03 pm</span>
            </div>
            <p className="text-gray-600">Awesome, Girls let's apply!</p>
          </div>
        </div>
      </div>
      <div className="flex mt-8 justify-end items-end ml-8">
        <input
          type="text"
          placeholder="Send a message"
          className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-pink-900"
        />
        <button className="ml-2 bg-pink-900 text-white py-2 px-4 rounded-full">Send</button>
      </div>
    </div>
    </>
  )
}

export default Business