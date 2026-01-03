import React from 'react';

const PromoBanner = ({ onRegister }) => {
    return (
        <section className="w-full bg-blue-50 py-16 md:py-20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
                    {/* Left: Mentor Image */}
                    <div className="w-full md:w-2/5 flex justify-center md:justify-start">
                        <div className="relative">
                            <img
                                src="/mentor-nobg.png"
                                alt="Saurabh Kulkarni"
                                className="w-64 h-64 md:w-80 md:h-80 object-contain"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-3/5 text-center md:text-left">
                        <p className="text-blue-600 text-sm md:text-base font-semibold uppercase tracking-wide mb-2">
                            INVESTMENT MASTERCLASS SERIES
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Smart and Simplified Insurance
                        </h2>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-6">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-base md:text-lg font-medium">Jan 10 - 11</span>
                        </div>
                        <button
                            onClick={onRegister}
                            className="btn-primary text-lg px-10 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
