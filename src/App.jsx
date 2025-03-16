import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Technology from "./components/tech";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Teachers from "./components/teachers";


function App() {
    return (
        <>
            <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

            <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
                <Navbar />
                <Hero />
                <Technology />
                <Projects />
                <Teachers />
                <Contact />
            </main>
        </>
    );
}
// App.jsx
export default App;
