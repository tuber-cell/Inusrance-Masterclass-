import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const RegistrationModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        occupation: 'Job'
    });
    const [isLoading, setIsLoading] = useState(false);

    const generateICS = () => {
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://meet.google.com/ckf-eatv-vhi
DTSTART:20260110T043000Z
DTEND:20260110T053000Z
SUMMARY:Insurance Masterclass (HIP)
DESCRIPTION:Joining link: https://meet.google.com/ckf-eatv-vhi
LOCATION:Google Meet
END:VEVENT
BEGIN:VEVENT
URL:https://meet.google.com/ckf-eatv-vhi
DTSTART:20260111T043000Z
DTEND:20260111T053000Z
SUMMARY:Insurance Masterclass (TIP)
DESCRIPTION:Joining link: https://meet.google.com/ckf-eatv-vhi
LOCATION:Google Meet
END:VEVENT
END:VCALENDAR`;
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'masterclass-invite.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const totalSteps = 5;

    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setIsLoading(true);

        const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyoBk4Y0FuSpeMr5LXO5CbDXlzYMg48-DAU8JNWkJdT6ggE4SHTNZoavweII2VRxEbBDQ/exec';
        const MEET_LINK = 'https://meet.google.com/ckf-eatv-vhi';

        const template = `Hello ${formData.name},

Thank you for registering for the Insurance Masterclass! We are excited to have you join us.

🗓 Date: Jan 10-11
⏰ Time: 10:00 AM

Join the Live Class here:
👉 ${MEET_LINK}

Please join 5 minutes early to test your audio. See you soon!

Best regards,
SK Dynamics 360`;

        // WhatsApp link
        const whatsappUrl = `https://wa.me/${formData.phone.replace(/\D/g, '')}?text=${encodeURIComponent(template)}`;

        // Email Link
        const emailSubject = "Registration Successful! 🎓";
        const emailUrl = `mailto:${formData.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(template)}`;

        try {
            if (WEBHOOK_URL) {
                await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...formData,
                        meetLink: MEET_LINK,
                        timestamp: new Date().toLocaleString()
                    }),
                });
            } else {
                console.log("Mock submission:", formData);
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            // Automatically open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            setIsLoading(false);
            setStep(6); // Success step
            generateICS();
        } catch (error) {
            console.error("Submission error:", error);
            setIsLoading(false);
            setStep(6);
            generateICS();
        }
    };

    if (!isOpen) return null;

    const stepVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative min-h-[500px] flex flex-col"
            >
                {/* Header / Close */}
                <div className="absolute top-6 right-6 z-20">
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <X size={20} className="text-gray-400" />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 z-30">
                    <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / (step === 6 ? 1 : totalSteps)) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col pt-12">
                    <AnimatePresence mode="wait" custom={step}>
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                custom={1}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="space-y-6 flex-1 flex flex-col justify-center"
                            >
                                <div>
                                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">Step 1 of 5</span>
                                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">What's your name?</h2>
                                    <p className="text-gray-500 text-sm">Let's get to know you better.</p>
                                </div>
                                <input
                                    autoFocus
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-lg font-medium"
                                    placeholder="Your Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onKeyPress={(e) => e.key === 'Enter' && formData.name && nextStep()}
                                />
                                <button
                                    onClick={nextStep}
                                    disabled={!formData.name}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg disabled:opacity-50 transition-all"
                                >
                                    Continue
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                custom={1}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="space-y-6 flex-1 flex flex-col justify-center"
                            >
                                <div>
                                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">Step 2 of 5</span>
                                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Phone Number</h2>
                                    <p className="text-gray-500 text-sm">To share the masterclass joining link.</p>
                                </div>
                                <input
                                    autoFocus
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-lg font-medium"
                                    placeholder="+91 00000 00000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onKeyPress={(e) => e.key === 'Enter' && formData.phone && nextStep()}
                                />
                                <div className="flex gap-4">
                                    <button onClick={prevStep} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 py-4 rounded-2xl font-bold">Back</button>
                                    <button
                                        onClick={nextStep}
                                        disabled={!formData.phone}
                                        className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg disabled:opacity-50 transition-all"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                custom={1}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="space-y-6 flex-1 flex flex-col justify-center"
                            >
                                <div>
                                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">Step 3 of 5</span>
                                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Email Address</h2>
                                    <p className="text-gray-500 text-sm">For sending educational materials.</p>
                                </div>
                                <input
                                    autoFocus
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-lg font-medium"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onKeyPress={(e) => e.key === 'Enter' && formData.email && nextStep()}
                                />
                                <div className="flex gap-4">
                                    <button onClick={prevStep} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 py-4 rounded-2xl font-bold">Back</button>
                                    <button
                                        onClick={nextStep}
                                        disabled={!formData.email}
                                        className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg disabled:opacity-50 transition-all"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                custom={1}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="space-y-6 flex-1 flex flex-col justify-center"
                            >
                                <div>
                                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">Step 4 of 5</span>
                                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Where are you from?</h2>
                                    <p className="text-gray-500 text-sm">Help us understand our audience range.</p>
                                </div>
                                <input
                                    autoFocus
                                    type="text"
                                    name="location"
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-lg font-medium"
                                    placeholder="City, State"
                                    value={formData.location}
                                    onChange={handleChange}
                                    onKeyPress={(e) => e.key === 'Enter' && formData.location && nextStep()}
                                />
                                <div className="flex gap-4">
                                    <button onClick={prevStep} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 py-4 rounded-2xl font-bold">Back</button>
                                    <button
                                        onClick={nextStep}
                                        disabled={!formData.location}
                                        className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg disabled:opacity-50 transition-all"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 5 && (
                            <motion.div
                                key="step5"
                                custom={1}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="space-y-6 flex-1 flex flex-col justify-center"
                            >
                                <div>
                                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">Step 5 of 5</span>
                                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Your Occupation</h2>
                                    <p className="text-gray-500 text-sm">Are you currently in a Job or Business?</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setFormData({ ...formData, occupation: 'Job' })}
                                        className={`py-5 rounded-2xl font-bold text-lg transition-all border-2 ${formData.occupation === 'Job' ? 'bg-blue-50 border-blue-600 text-blue-600' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'}`}
                                    >
                                        Job
                                    </button>
                                    <button
                                        onClick={() => setFormData({ ...formData, occupation: 'Business' })}
                                        className={`py-5 rounded-2xl font-bold text-lg transition-all border-2 ${formData.occupation === 'Business' ? 'bg-blue-50 border-blue-600 text-blue-600' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'}`}
                                    >
                                        Business
                                    </button>
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={prevStep} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 py-4 rounded-2xl font-bold">Back</button>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                        className="flex-[2] bg-blue-900 hover:bg-black text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 transition-all flex items-center justify-center"
                                    >
                                        {isLoading ? (
                                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            "Register Now"
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 6 && (
                            <motion.div
                                key="step6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-6 flex-1 flex flex-col justify-center"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Check size={40} className="text-green-600" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-3">You're In!</h2>
                                <p className="text-gray-500 mb-8 text-lg px-4">
                                    Thanks <span className="text-blue-600 font-bold">{formData.name}</span>! Your registration is confirmed.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-2xl mb-8 text-left border border-blue-100 mx-4">
                                    <p className="font-bold text-blue-900 mb-2 text-base text-center">What's Next?</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-blue-800 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                                            Check your email for the session schedule.
                                        </li>
                                        <li className="flex items-start gap-3 text-blue-800 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                                            Calendar invite downloaded successfully.
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-3">
                                    <a
                                        href="https://meet.google.com/ckf-eatv-vhi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                                    >
                                        Join Meeting Link
                                    </a>
                                    <button onClick={onClose} className="w-full bg-gray-100 text-gray-600 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all">
                                        Close
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default RegistrationModal;
