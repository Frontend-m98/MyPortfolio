import React from "react";

const Teachers = () => {
    return (
        <>
            <div id="teachers" className="flex flex-col items-center justify-center mt-10 gap-3 space-y-6 p-14">
                <h1 className="text-center text-5xl md:text-5xl">
                    <span className="bg-gradient-to-r from bg-indigo-500 to-blue-500 bg-clip-text text-transparent">
                        MAS Teachers
                    </span>
                </h1>
            </div>

            <div className="flex items-center justify-center min-h-screen container mx-auto">
                {/*START GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* CARD */}

                    <div className="card transition-all duration-300 hover:scale-105">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="../../public/teachers/Mukhriddin-Hodiev.jpg"
                                    alt="teacher"
                                    className="card flex justify-center items-center text-center h-[200px] rounded-[50%]"
                                />
                            </div>

                            <h4 className="text-center text-2xl md:text-3xl font-medium mt-3 text-orange-300">
                                Muhriddin Hodiev
                            </h4>
                            <p className="text-slate-400 text-md mt-2 text-center">
                                Muhriddin Hodiev is the epitome of creativity and new approaches. He always brings a
                                fresh perspective to every project and inspires others with his innovative ideas.
                            </p>
                        </div>
                    </div>

                    <div className="card transition-all duration-300 hover:scale-105">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="../../public/teachers/Islom-Abdulahatov.jpg"
                                    alt="teacher"
                                    className="card flex justify-center items-center text-center h-[200px] rounded-[50%]"
                                />
                            </div>

                            <h4 className="text-center text-2xl md:text-3xl font-medium mt-3 text-orange-300">
                                Islom Abdulahatov
                            </h4>
                            <p className="text-slate-400 text-md mt-2 text-center">
                                Islom Abdulahatov is the epitome of creativity and new approaches. He always brings a
                                fresh perspective to every project and inspires others with his innovative ideas.
                            </p>
                        </div>
                    </div>

                    <div className="card transition-all duration-300 hover:scale-105">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="../../public/teachers/Ibrohim-Jalolov.jpg"
                                    alt="teacher"
                                    className="card flex justify-center items-center text-center h-[200px] rounded-[50%]"
                                />
                            </div>

                            <h4 className="text-center text-2xl md:text-3xl font-medium mt-3 text-orange-300">
                                Ibrohim Jalolov
                            </h4>
                            <p className="text-slate-400 text-md mt-2 text-center">
                                Ibrohim Jalolov is the epitome of creativity and new approaches. He always brings a
                                fresh perspective to every project and inspires others with his innovative ideas.
                            </p>
                        </div>
                    </div>
                </div>
                {/* END GRID */}
            </div>
        </>
    );
};
export default Teachers;
