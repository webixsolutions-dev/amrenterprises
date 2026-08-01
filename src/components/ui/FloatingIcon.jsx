import { useState } from 'react'
import { FaCommentAlt, FaTimes } from 'react-icons/fa'

export default function FloatingChat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-[100] w-[340px] h-[500px] bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-[#35A8E8] px-6 py-5">
            <h2 className="text-2xl text-black">Amayra Enterprises</h2>
          </div>

          <div className="p-5 overflow-y-auto h-[calc(100%-80px)]">
            <div className="bg-[#c5e2f6] p-4 rounded-lg mb-5">
              <p className="text-base text-gray-800">
                Hi! Let us know how we can help and we’ll respond shortly.
              </p>
            </div>

            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-300 px-4 py-4 text-base mb-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 px-4 py-4 text-base mb-4 outline-none"
            />

            <textarea
              placeholder="How can we help?*"
              rows="5"
              className="w-full border border-gray-300 px-4 py-4 text-base mb-4 outline-none resize-none"
            />

            <button className="w-full bg-[#35A8E8] text-black py-3 font-semibold">
              Send Message
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-5 right-5 z-[110] w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all ${
          open ? 'bg-gray-600' : 'bg-[#35A8E8]'
        }`}
      >
        {open ? (
          <FaTimes className="text-white text-2xl" />
        ) : (
          <FaCommentAlt className="text-black text-xl" />
        )}
      </button>
    </>
  )
}