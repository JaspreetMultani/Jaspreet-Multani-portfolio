import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import BackgroundGradient from './BackgroundGradient';

function App() {
  return (
    <>
      <BackgroundGradient />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
