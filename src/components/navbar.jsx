import React, {useState} from "react";
import {BiMenu, BiX} from "react-icons/bi";
import {BsGithub} from "react-icons/bs";
import {FaFacebookMessenger, FaInstagram, FaTelegram} from "react-icons/fa";
import {TbBrandGmail, TbBrandLinkedinFilled} from "react-icons/tb";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
            <a
                href="#home"
                className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
            >
                MAS(Portfolio)
            </a>

            <ul className="hidden md:flex gap-10">
                <a
                    href="#home"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:text-sky-600 hover:opacity-100"
                >
                    <li>Home</li>
                </a>

                <a
                    href="#tech"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:text-sky-600 hover:opacity-100"
                >
                    <li>Technologies</li>
                </a>

                <a
                    href="#projects"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:text-sky-600 hover:opacity-100"
                >
                    <li>Portfolio</li>
                </a>

                <a
                    href="#teachers"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:text-sky-600 hover:opacity-100"
                >
                    <li>Teachers</li>
                </a>

                <a
                    href="#contact"
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:text-sky-600 hover:opacity-100"
                >
                    <li>Contacts</li>
                </a>
            </ul>

            <ul className="hidden md:flex gap-2">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                    <a href="https://www.linkedin.com/feed/">
                        {" "}
                        <TbBrandLinkedinFilled className="h-30" />
                    </a>
                </li>

                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                    <a href="https://web.telegram.org/k/">
                        <FaTelegram className="h-30" />
                    </a>
                </li>

                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                    <a href="https://www.instagram.com/?__coig_challenged=1">
                        {" "}
                        <FaInstagram className="h-30" />
                    </a>
                </li>

                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                    <a href="https://www.facebook.com/">
                        <FaFacebookMessenger className="h-30" />
                    </a>
                </li>

                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-600 hover:opacity-100">
                    <a href="https://github.com/Frontend-m98">
                        <BsGithub className="h-30" />
                    </a>
                </li>

                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                        <TbBrandGmail className="h-30" />
                    </a>
                </li>
            </ul>

            {isOpen ? (
                <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
            ) : (
                <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
            )}

            {isOpen && (
                <div
                    className={`fixed right-0 top-[84px] flex h-screen
                        w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12
                         ${isOpen ? "block" : "hidden"}`}
                >
                    <ul className="flex flex-col gap-8">
                        <a
                            href="#home"
                            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 border-b"
                        >
                            <li>Home</li>
                        </a>

                        <a
                            href="#tech"
                            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 border-b"
                        >
                            <li>Tech</li>
                        </a>

                        <a
                            href="#projects"
                            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 border-b"
                        >
                            <li>Projects</li>
                        </a>

                        <a
                            href="#contact"
                            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 border-b"
                        >
                            <li>Contact</li>
                        </a>
                    </ul>

                    <ul className="flex flex-wrap gap-5">
                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                            <TbBrandLinkedinFilled />
                        </li>

                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                            <FaTelegram />
                        </li>

                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                            <FaInstagram />
                        </li>

                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                            <FaFacebookMessenger />
                        </li>

                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-600 hover:opacity-100">
                            <BsGithub />
                        </li>

                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                            <TbBrandGmail />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
