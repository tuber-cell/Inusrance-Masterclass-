import React from 'react';
import { BarChart3, Clock, Globe } from 'lucide-react';

const WhoIsFor = ({ onRegister }) => {
    return (
        <section id="about-section" className="py-20 bg-white">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    {/* Left: Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Who Is This<br />Masterclass For?
                        </h2>

                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            First-time buyers, young professionals, and anyone aiming to build a stronger financial foundation.
                        </p>

                        <button onClick={onRegister} className="btn-primary mb-10">
                            Register Now
                        </button>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl">
                                    <BarChart3 size={24} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">Level</h3>
                                    <p className="text-gray-600">Beginner-Friendly</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl">
                                    <Clock size={24} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">Duration</h3>
                                    <p className="text-gray-600">1 Hour</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl">
                                    <Globe size={24} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">Language</h3>
                                    <p className="text-gray-600">English</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image with Blueprint Background */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="blueprint-bg rounded-3xl overflow-hidden relative w-full max-w-md h-[450px] flex items-end justify-center">
                            <div className="absolute top-8 right-8 bg-white px-4 py-2 rounded-full shadow-lg z-10">
                                <span className="text-sm font-bold text-gray-900">Hosted By</span>
                            </div>
                            <img
                                src="/mentor-nobg.png"
                                alt="Saurabh Kulkarni"
                                className="w-auto h-full object-contain object-bottom relative z-0"
                            />
                            <div className="absolute bottom-8 left-8 right-8 bg-white p-4 rounded-2xl shadow-xl z-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Saurabh Kulkarni</h3>
                                <p className="text-xs text-blue-600 font-medium">Financial Growth Expert | Founder, SK Dynamics 360 | Investment Strategist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsFor;
