import React from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';

const ValueProp = () => {
    const props = [
        {
            icon: <Shield size={32} className="text-yellow-500" />,
            title: "100%",
            subtitle: "Claim Support",
            description: "Expert guidance on documentation"
        },
        {
            icon: <Users size={32} className="text-blue-600" />,
            title: "Founded by",
            subtitle: "Saurabh Kulkarni",
            description: "Expert Investment Strategist",
            image: "/mentor-nobg.png"
        },
        {
            icon: <TrendingUp size={32} className="text-blue-600" />,
            title: "Empowering",
            subtitle: "300+ Attendees",
            description: "Transforming lives through insurance education"
        }
    ];

    return (
        <section className="py-20 bg-[#0073e6] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-50"></div>

            <div className="container px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    About SK Dynamics 360
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {props.map((prop, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                            <div className="flex justify-center mb-4">
                                {prop.image ? (
                                    <img src={prop.image} alt={prop.subtitle} className="w-16 h-16 rounded-full object-cover object-top" />
                                ) : (
                                    prop.icon
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{prop.title}</h3>
                            <p className="text-sm font-semibold text-blue-600 mb-3">{prop.subtitle}</p>
                            <p className="text-xs text-gray-600">{prop.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
