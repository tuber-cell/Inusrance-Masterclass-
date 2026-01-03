import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "Will there be a recording available?",
            answer: "No. Recordings will not be shared due to compliance reasons."
        },
        {
            question: "How is this different from other webinars?",
            answer: "This masterclass focuses on practical, actionable strategies rather than theory. You'll learn from real claim stories and get personalized insights."
        },
        {
            question: "Do I need to attend both days?",
            answer: "While each session is valuable on its own, attending both days will give you a comprehensive understanding of the entire claims process."
        },
        {
            question: "Can I ask questions during the session?",
            answer: "Absolutely! We encourage questions and will have dedicated Q&A segments throughout the masterclass."
        },
        {
            question: "Will this help me choose the right plan later?",
            answer: "Yes! You'll gain the knowledge needed to evaluate insurance plans and make informed decisions that align with your financial goals."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Frequently asked questions
                </h2>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                <span className="flex-shrink-0 text-gray-400">
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
