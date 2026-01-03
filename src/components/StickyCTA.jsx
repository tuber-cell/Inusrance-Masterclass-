import React, { useState, useEffect } from 'react';

const StickyCTA = ({ onRegister }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                // Show CTA when the bottom of the about section is above the viewport
                if (rect.bottom < 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                // Fallback if section is not found
                if (window.scrollY > 1200) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 w-full bg-blue-50 border-t border-blue-100 py-4 px-4 z-[100] shadow-lg transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
        >
            <div className="container mx-auto">
                <div className="flex items-center justify-between gap-6 max-w-6xl mx-auto">
                    {/* Left Side: Image + Text */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Mentor Image */}
                        <img
                            src="/mentor-nobg.png"
                            alt="Saurabh Kulkarni"
                            className="w-16 h-16 md:w-20 md:h-20 object-cover object-top rounded-full border-2 border-blue-200"
                        />
                        {/* Text */}
                        <div>
                            <p className="text-xs md:text-sm text-blue-600 uppercase font-semibold tracking-wide">
                                INSURANCE MASTERCLASS SERIES
                            </p>
                            <h3 className="text-base md:text-xl font-bold text-gray-900">
                                Smart and Simplified Insurance
                            </h3>
                        </div>
                    </div>

                    {/* Right Side: Button */}
                    <button
                        onClick={onRegister}
                        className="btn-primary py-3 px-8 md:py-4 md:px-10 text-base md:text-lg font-bold whitespace-nowrap"
                    >
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StickyCTA;