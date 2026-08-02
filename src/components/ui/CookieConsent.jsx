import { useState } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-4 right-4 w-[90%] sm:w-[380px] md:w-[420px] lg:w-[450px] bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl shadow-black/50 text-gray-200 p-5 md:p-6 z-[999]">
      
      <h3 className="text-white font-semibold text-base md:text-lg mb-3">
        This website uses cookies.
      </h3>

      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
        If you are curious to study or examine traffic and advertising you should 
        explore the examples and use of cookies on your data and for aggregated 
        and all other user data.
      </p>

      <div className="flex justify-center mt-5">
        <button
          onClick={() => setVisible(false)}
          className="bg-brand text-black font-semibold px-8 py-2.5 rounded-md hover:bg-white transition-all duration-300 text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  )
}