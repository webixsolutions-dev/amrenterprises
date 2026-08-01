import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-6 md:gap-4 text-center">
        <p className="text-sm order-2 md:order-1">
          Copyright © {new Date().getFullYear()} Amayra Enterprises - All Rights Reserved.
        </p>
        <div className="flex gap-6 order-1 md:order-2">
          <a
            href="https://www.facebook.com/profile.php?id=61559392680979"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://www.instagram.com/amayra_enterprise001/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
        <p className="text-xs text-gray-500 order-3">
          Powered by Amayra Enterprises since 2021
        </p>
      </div>
    </footer>
  )
}