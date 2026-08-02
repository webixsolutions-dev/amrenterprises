import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import img from '../../../assets/images/review.png';
const FeedBack = () => {
    return (
        <section className="bg-black px-5 py-10 sm:px-8 md:px-[6%] md:py-16">

            {/* Instagram */}
            <div className="w-full">
                <h1 className="text-xl font-semibold uppercase leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    Instagram
                </h1>

                <div className="mt-3 h-px w-full bg-gray-500 sm:mt-4 md:mt-6" />

                <p className="my-5 text-center text-sm text-gray-400 sm:my-6 sm:text-base md:my-8">
                    Feed coming soon
                </p>

                <div className="w-full overflow-hidden">
                    <img
                        src={img}
                        alt="Instagram"
                        className="h-[220px] w-full object-cover sm:h-[280px] md:h-[350px] lg:h-[400px]"
                    />
                </div>
            </div>

            {/* Connect With Us */}
            <div className="mt-10 w-full sm:mt-12 md:mt-16">

                <h1 className="text-xl font-semibold uppercase leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    Connect With Us
                </h1>

                <div className="mt-3 h-px w-full bg-gray-500 sm:mt-4 md:mt-6" />

               
                <div className="mt-8 flex items-center justify-center gap-16 sm:gap-20">
                    <a
                        href="https://www.facebook.com/profile.php?id=61559392680979"
                        aria-label="Facebook"
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-black transition-transform duration-300 hover:scale-110 sm:h-[60px] sm:w-[60px]"
                    >
                        <FaFacebookF className="text-4xl" />
                    </a>

                    <a
                        href="https://www.instagram.com/amayra_enterprise001/"
                        aria-label="Instagram"
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-black transition-transform duration-300 hover:scale-110 sm:h-[60px] sm:w-[60px]"
                    >
                        <FaInstagram className="text-4xl" />
                    </a>
                </div>
            </div>

        </section>
    );
};

export default FeedBack;