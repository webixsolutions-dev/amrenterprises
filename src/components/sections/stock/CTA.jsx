import React, { useState } from "react";

import Image1 from "../../../assets/images/stockCTA1.webp";
import Image2 from "../../../assets/images/stockCTA2.webp";
import Image3 from "../../../assets/images/stockCTA3.webp";

const CTA = () => {
    const images = [Image1, Image2, Image3];

    const [selectedImage, setSelectedImage] = useState(null);

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedImage(
            (prev) => (prev - 1 + images.length) % images.length
        );
    };

    return (
        <section className="bg-black py-16">
            {/* 3 Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className="group relative h-[350px] md:h-[300px] overflow-hidden cursor-pointer"
                    >
                        <img
                            src={image}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            {/* Slider / Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-5"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-7 text-white text-4xl z-10 hover:text-gray-300"
                    >
                        &times;
                    </button>

                    {/* Previous */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-4 md:left-10 text-white text-5xl z-10 hover:scale-110 transition"
                    >
                        &#10094;
                    </button>

                    {/* Image */}
                    <img
                        src={images[selectedImage]}
                        alt=""
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-[90%] max-h-[85vh] object-contain"
                    />

                    {/* Next */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 md:right-10 text-white text-5xl z-10 hover:scale-110 transition"
                    >
                        &#10095;
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
                        {selectedImage + 1} / {images.length}
                    </div>
                </div>
            )}
        </section>
    );
};

export default CTA;