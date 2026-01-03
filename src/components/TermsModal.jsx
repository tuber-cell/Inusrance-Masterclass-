import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Shield, AlertCircle } from 'lucide-react';

const TermsModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-blue-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Terms and Conditions</h2>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">SK Dynamics 360 • Saurabh Kulkarni</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white transition-colors shadow-sm border border-transparent hover:border-gray-200"
                            >
                                <X size={20} className="text-gray-400" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-auto custom-scrollbar flex-1 bg-[#ffffff]">
                            <div className="space-y-8 text-sm leading-relaxed text-gray-600">
                                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                                    <h3 className="text-blue-900 font-bold uppercase tracking-wide text-xs mb-2">Health & Term Insurance Masterclass</h3>
                                    <p className="text-blue-700 text-sm font-medium italic">Backed by SK Dynamics 360 | Owner: Saurabh Kulkarni</p>
                                </div>

                                <section>
                                    <h4 className="text-gray-900 font-bold uppercase text-[11px] tracking-widest mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        1. GENERAL INFORMATION & ACCEPTANCE OF TERMS
                                    </h4>
                                    <p>
                                        These Terms and Conditions (“Terms”, “Agreement”) govern your access to, registration for, participation in, and use of the Health & Term Insurance Masterclass (“Masterclass”, “Program”, “Session”) organized, conducted, promoted, and backed by SK Dynamice 360, a business owned and operated by Saurabh Kulkarni (“Organizer”, “Company”, “We”, “Us”, “Our”).
                                    </p>
                                    <p className="mt-4">
                                        By registering for, accessing, attending, viewing, or participating in the Masterclass in any manner (whether online or offline), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and all applicable laws and regulations.
                                    </p>
                                    <p className="mt-4 font-semibold text-gray-800">
                                        If you do not agree with any part of these Terms, you must not register for or participate in the Masterclass.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="text-gray-900 font-bold uppercase text-[11px] tracking-widest mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        2. ELIGIBILITY TO PARTICIPATE
                                    </h4>
                                    <ul className="space-y-3 pl-4 list-disc list-outside marker:text-blue-400">
                                        <li>You must be at least 18 years of age to participate in the Masterclass.</li>
                                        <li>By registering, you represent and warrant that you are legally capable of entering into a binding agreement, all information provided is accurate, and you are participating voluntarily.</li>
                                        <li>The Masterclass is not intended for minors, and no parental consent will be accepted.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h4 className="text-gray-900 font-bold uppercase text-[11px] tracking-widest mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        3. PURPOSE AND SCOPE OF THE MASTERCLASS
                                    </h4>
                                    <p className="mb-3">The Masterclass is designed solely for educational, informational, and awareness purposes related to Health Insurance, Term Insurance, and general insurance concepts.</p>
                                    <p className="font-bold text-gray-800 mb-2">Important Notice:</p>
                                    <p>The Masterclass does not replace professional financial advice, medical advice, legal advice, or tax consultation. Participants are strongly advised to consult licensed professionals before making any insurance or financial decisions.</p>
                                </section>

                                <section className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                                    <h4 className="text-amber-900 font-bold uppercase text-[11px] tracking-widest mb-3 flex items-center gap-2">
                                        <AlertCircle size={14} />
                                        4. NO ADVICE, NO RECOMMENDATION, NO SOLICITATION
                                    </h4>
                                    <p className="text-amber-800 text-xs">
                                        Nothing shared during the Masterclass shall be considered financial, investment, medical, legal, or tax advice. Participation does not create an advisor-client relationship or any fiduciary obligation.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="text-gray-900 font-bold uppercase text-[11px] tracking-widest mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        5. NO GUARANTEE OR ASSURANCE
                                    </h4>
                                    <p>
                                        SK Dynamice 360 and Saurabh Kulkarni do not guarantee approval of any insurance policy, acceptance by any insurance company, or specific premiums/benefits. Insurance decisions are solely determined by the respective companies and underwriting norms.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="text-gray-900 font-bold uppercase text-[11px] tracking-widest mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        8. INTELLECTUAL PROPERTY RIGHTS
                                    </h4>
                                    <p>
                                        All content related to the Masterclass, including slides, videos, and branding, are the exclusive intellectual property of SK Dynamics 360. Participants may not record, copy, or distribute content for commercial purposes.
                                    </p>
                                </section>

                                <section className="pb-8 border-b border-gray-100">
                                    <h4 className="text-gray-900 font-bold uppercase text-[11px] tracking-widest mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        15. GOVERNING LAW & JURISDICTION
                                    </h4>
                                    <p>
                                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of Indian courts.
                                    </p>
                                </section>

                                <div className="text-center pt-4">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">End of Terms and Conditions</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                <Shield size={14} className="text-green-500" />
                                <span>Secured by SK Dynamics 360</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-full sm:w-auto px-10 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-md active:scale-95"
                            >
                                I Understand
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default TermsModal;
