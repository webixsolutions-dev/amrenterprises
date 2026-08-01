import { useState } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 w-full md:w-3/4 bg-gray-900 text-gray-200 p-4 flex flex-col md:flex-row items-center justify-between gap-3 z-50">
      <p className="text-sm max-w-2xl">
        This website uses cookies. We use cookies to analyze website traffic and optimize your
        website experience. By accepting our use of cookies, your data will be aggregated with
        all other user data.
      </p>

      <button
        onClick={() => setVisible(false)}
        className="bg-brand text-white px-5 py-2 rounded-md font-medium hover:bg-brand-dark shrink-0"
      >
        Accept
      </button>
    </div>
  )
}