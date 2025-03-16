import React from "react";
import {FaPhoneSquareAlt} from "react-icons/fa";

const Contact = () => {
    return (
        <div
            id="contact"
            className="flex min-h-[40vh] min-w-full
     items-center justify-center"
        >
            <div className=" flex flex-col items-center justify-center gap-3 space-y-6 p-14">
                <h1 className="text-center text-5xl md:text-5xl">
                    <span className="bg-gradient-to-r from bg-indigo-500 to-blue-500 bg-clip-text text-transparent">
                        MAS Contacts
                    </span>
                </h1>
                <p className="text-center text-lg font-semibold text-gray-500">Contact me if you are interested.</p>

                <a
                    href=""
                    className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:bg-orange-900"
                >
                    +998900041172
                </a>

                <a
                    href=""
                    className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:bg-orange-900"
                >
                    +998900674243
                </a>
            </div>
        </div>
    );
};
export default Contact;
