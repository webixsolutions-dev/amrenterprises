import { useState } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-4 right-4 w-[90%] sm:w-[380px] md:w-[420px] lg:w-[450px] bg-brand shadow-2xl shadow-black/50 text-white p-5 md:p-6 z-[999]">

      <h3 className="text-white normal-case text-base md:text-lg mb-3">
        This website uses cookies
      </h3>

      <p className="text-xs md:text-sm text-white/90 leading-relaxed">
        We use cookies to analyze website traffic and personalize your browsing experience.
        By accepting these cookies, you help us improve our website and for registered users
        all other user data.
      </p>

      <div className="flex mt-5">
        <button
          onClick={() => setVisible(false)}
          className="w-full bg-black text-white normal-case px-8 py-2.5 rounded-md text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  )
}