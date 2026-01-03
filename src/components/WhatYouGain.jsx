import React from 'react';

const WhatYouGain = ({ onRegister }) => {
    const lessons = [
        "Common Insurance Mistakes to Avoid",
        "Tailored Strategies for Every Life Stage",
        "Insights from Real Claim Stories",
        "Tips to Strengthen Your Financial Plan"
    ];

    return (
        <section className="py-20 bg-[#0073e6] text-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="container px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Left: Heading */}
                        <div className="md:w-2/5">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                What Will You Gain?
                            </h2>
                            <p className="text-blue-100 leading-relaxed mb-8">
                                This 2-day masterclass simplifies insurance so you can make confident, informed decisions. Learn how to protect your money, secure your family, and build a future that grows with your goals and changing needs.
                            </p>
                            <button onClick={onRegister} className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3.5 px-8 rounded-xl transition-all duration-200">
                                Register Now
                            </button>
                        </div>

                        {/* Right: Lessons List */}
                        <div className="md:w-3/5">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-bold mb-6">4 Lessons</h3>
                                <div className="space-y-6">
                                    {lessons.map((lesson, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center font-bold">
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                            <p className="text-base font-medium pt-1">{lesson}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouGain;
