import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Internships from './components/Internships';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Internships />
        <Projects />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
