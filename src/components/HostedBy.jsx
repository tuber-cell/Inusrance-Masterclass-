import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Award } from 'lucide-react';

const HostedBy = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Mentor</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                            <img
                                src="/mentor-nobg.png"
                                alt="Saurabh Kulkarni"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-primary">
                            <Award size={32} />
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 text-center md:text-left"
                    >
                        <h3 className="text-3xl font-bold mb-2">Saurabh Kulkarni</h3>
                        <p className="text-primary font-semibold mb-4 uppercase tracking-wide">Financial Expert</p>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            With over 15 years of experience in investment banking and equity research, John has helped thousands of individuals achieve financial freedom. He simplifies complex market concepts into actionable strategies that work for everyone.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                                <span className="block text-2xl font-bold text-gray-900">15+</span>
                                <span className="text-xs text-gray-500">Years Exp.</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                                <span className="block text-2xl font-bold text-gray-900">50k+</span>
                                <span className="text-xs text-gray-500">Students</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                                <span className="block text-2xl font-bold text-gray-900">200%</span>
                                <span className="text-xs text-gray-500">Avg Growth</span>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center md:justify-start gap-4">
                            <a href="#" className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-2 bg-blue-100 rounded-full text-blue-400 hover:bg-blue-200 transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HostedBy;
