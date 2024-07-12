import Header from '../components/Header';
import Footer from '../components/Footer';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import HomePage from './home';
export default function Home() {
    return (
    <div>
        <Header />
        <HomePage/>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </div>
    );
}
