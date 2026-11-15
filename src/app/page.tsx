import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import InteractiveBackground from "@/components/ui/InteractiveBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAF9FF] dark:bg-[#0B0618] text-[#171329] dark:text-[#F5F0FF] selection:bg-purple-500 selection:text-white transition-colors duration-300">
      {/* Floating interactive background tech stack */}
      <InteractiveBackground />

      {/* Top Navbar */}
      <Navbar />

      {/* Floating Vertical Sidebar (Desktop) */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative z-10 lg:pl-16 xl:pl-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
