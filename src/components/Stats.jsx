import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { value: "100%", label: "Claim Visibility" },
        { value: "300+", label: "Lives Changed" },
        { value: "15+", label: "Years Experience" },
        { value: "100%", label: "Satisfaction" }
    ];

    return (
        <section className="py-12 bg-primary text-white">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="flex flex-col items-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
                            <p className="text-blue-100 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
