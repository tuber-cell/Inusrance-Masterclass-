import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full bg-white py-4 border-b border-gray-50 sticky top-0 z-[100]">
            <div className="container px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                        <img src="/sk-logo.png" alt="SK Dynamics 360" className="h-12 w-auto" />
                        <span className="text-2xl font-extrabold text-[#1a1a1a]">SK Dynamics 360</span>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
