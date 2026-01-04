import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Saurabh Kulkarni",
            role: "LINK ASIA",
            text: "Thank you SK Dynamics 360 for taking out your time and conducting an informative and customised webinar. The team at SK Dynamics 360 are spreading the right awareness and SK Dynamics 360 is the right insurance partner and its nuances.",
            avatar: "/mentor.jpg"
        },
        {
            name: "Sanjay Rathod",
            role: "MOBILE REVIEW",
            text: "Honest approach and life-like selling or up-selling. They did not ask me to buy any product during the session. I hope they continue and stay the way of not making marketing webinar.",
            avatar: "/sanjay-rathod.png"
        },
        {
            name: "Suraj Takale",
            role: "FINEDITION",
            text: "Just attended an amazing webinar by Saurabh Kulkarni on Life Insurance 101. My biggest takeaway was that I am an investment and term plan is the best. Life Insurance plan.",
            avatar: "/suraj-takale.png"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    Hear from Those Who've Already Attended
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Join thousands of satisfied learners who transformed their financial knowledge.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card-sk p-6 hover:shadow-xl transition-shadow">
                            <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover object-top origin-top scale-150"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
