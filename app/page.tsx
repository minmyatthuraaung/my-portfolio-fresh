import Home from "./component/home";
import Navbar from "./component/navbar";
import About from "./component/about";
import Projects from "./component/projects";
import Contact from "./component/contact";
import Footer from "./component/footer";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] px-4 py-2 text-white">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
