import React, { useState } from 'react';
import TermsModal from './TermsModal';

const Footer = () => {
    const [isTermsOpen, setIsTermsOpen] = useState(false);

    return (
        <footer className="bg-white border-t border-gray-200 py-12 pb-24">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Logo and Description */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/sk-logo.png" alt="SK Dynamics 360" className="h-10 w-auto" />
                            <span className="text-2xl font-extrabold text-gray-900">SK Dynamics 360</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            With SK Dynamics 360, you don't just learn about investing. You understand it. You master it. And you make better financial decisions for lasting wealth.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>📧 <a href="mailto:sk360dynamics@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">sk360dynamics@gmail.com</a></p>
                            <p className="text-xs leading-relaxed">
                                Address: Laxmi Hights Shop No 7 Chinchwad
                            </p>
                        </div>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Policies</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <button
                                    onClick={() => setIsTermsOpen(true)}
                                    className="hover:text-blue-600 transition-colors text-left"
                                >
                                    Terms and Conditions
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-500">
                        All rights reserved © 2025 SK Dynamics 360.
                    </p>
                </div>
            </div>

            <TermsModal
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
            />
        </footer>
    );
};

export default Footer;
