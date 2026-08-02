import { useState } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] max-w-4xl bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl shadow-black/50 text-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 z-50">
      <p className="text-sm md:text-base text-center md:text-left text-gray-300 leading-relaxed">
        This website uses cookies. We use cookies to analyze website traffic and optimize your
        website experience. By accepting our use of cookies, your data will be aggregated with
        all other user data.
      </p>

      <button
        onClick={() => setVisible(false)}
        className="bg-brand text-black font-semibold px-6 py-2.5 rounded-md hover:bg-white transition-all duration-300 shrink-0 text-sm md:text-base"
      >
        Accept
      </button>
    </div>
  )
}