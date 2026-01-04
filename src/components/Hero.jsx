import { Calendar, Clock } from 'lucide-react';
import hipIcon from '../assets/hip-icon.png';
import tipIcon from '../assets/tip-icon.png';



const Hero = ({ onRegister }) => {
    return (
        <section className="relative w-full pb-32 bg-[#f0f7ff]">
            {/* Blue Arch Background */}
            <div className="sk-arch">
                <div className="container px-4 pt-10 text-center text-white relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold px-4 mb-3 leading-tight" style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)' }}>
                        Insurance Masterclass Series
                    </h1>
                    <p className="text-base md:text-lg text-blue-50 max-w-2xl mx-auto px-4 mb-6" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
                        Master the art of smart investing with expert guidance
                    </p>

                    {/* Logo */}
                    <div className="flex-shrink-0 bg-white backdrop-blur-md p-6 rounded-full shadow-2xl border border-white/50 translate-y-8 md:-translate-y-6">
                        <img src="/sk-logo.png" alt="SK Dynamics 360" className="h-28 w-auto" />
                    </div>

                    {/* HIP & TIP Items */}
                    <div className="flex flex-col items-center md:items-start gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center p-2.5 shadow-lg border border-white/30">
                                <img src={hipIcon} alt="Health" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-lg md:text-2xl text-blue-100 font-bold tracking-wide uppercase opacity-95">
                                HIP ( Health Insurance Plan )
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center p-2.5 shadow-lg border border-white/30">
                                <img src={tipIcon} alt="Term" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-lg md:text-2xl text-blue-100 font-bold tracking-wide uppercase opacity-95">
                                TIP ( Term Insurance Plan )
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* Main Card */ }
    <div className="container px-4 relative mt-12 z-20">
        <div className="card-sk max-w-4xl mx-auto overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* Left: Mentor Image */}
                <div className="md:w-2/5 relative flex items-end justify-center overflow-hidden"
                    style={{
                        backgroundImage: 'url(/mentor-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    {/* Yellow decorative blob */}
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3"></div>

                    <img
                        src="/mentor-nobg.png"
                        alt="Mentor"
                        className="relative z-10 w-full h-full object-contain object-bottom"
                    />
                    <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-3 items-start">
                        <div className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 border border-gray-100">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-bold text-gray-800">300+ <span className="font-normal text-gray-600">People Registered</span></span>
                        </div>

                        <div className="bg-white/95 backdrop-blur shadow-xl p-4 rounded-xl border border-gray-100 max-w-[260px]">
                            <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                                Saurabh Kulkarni (SK)
                            </h3>
                            <div className="text-xs text-gray-600 space-y-1">
                                <p className="font-semibold text-blue-700">9+ Years of Work Experience</p>
                                <p>B.Com, MBA (Finance)</p>
                                <p>IRDA Certified Insurance Consultant and Agent</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-3/5 p-8 md:p-10">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full">
                            <Clock size={14} />
                            <span className="text-xs font-bold">1 Hour</span>
                        </div>
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full">
                            <span className="text-xs font-bold uppercase">Free</span>
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Smart and Simplified Insurance
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Stop buying insurance blindly. Learn how to choose the right policy, understand waiting periods, make correct declarations, pick the right addons, and master the claim process — all explained in a simple way. Because when you understand your policy, you secure your future with confidence.
                    </p>

                    {/* Date Pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="border-2 border-blue-500 rounded-xl p-3 bg-blue-50">
                            <div className="flex items-start gap-2">
                                <div className="flex-1">
                                    <p className="text-[10px] text-gray-500 font-medium uppercase mb-1">JAN</p>
                                    <p className="text-2xl font-bold text-red-500 mb-1">10</p>
                                    <p className="text-xs text-gray-700 font-medium mb-1">Saturday, 10:00 AM</p>
                                    <p className="text-sm text-gray-900 font-semibold">Health Insurance Plan (HIP)</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors cursor-pointer">
                            <div className="flex items-start gap-2">
                                <div className="flex-1">
                                    <p className="text-[10px] text-gray-500 font-medium uppercase mb-1">JAN</p>
                                    <p className="text-2xl font-bold text-red-500 mb-1">11</p>
                                    <p className="text-xs text-gray-700 font-medium mb-1">Sunday, 10:00 AM</p>
                                    <p className="text-sm text-gray-900 font-semibold">Term Insurance Plan (TIP)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={onRegister} className="btn-primary w-full text-base font-bold">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    </div>
        </section >
    );
};

export default Hero;
