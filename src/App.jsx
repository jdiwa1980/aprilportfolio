
import  Hero  from './sections/Hero';
import  About  from './sections/About';
import Navbar from './layout/navbar';
import CoreValues from './sections/CoreValues';
import WhyHire from './sections/WhyHire';
import { Footer } from './layout/footer';
import Expertise from './sections/Expertise';
import Services from './sections/Services';
import Tools from './sections/Tools';
import Projects from './sections/Projects';
import Engagement from './sections/Engagement';

function App() {
  

  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <main>
          <Hero />
          <About />
          <CoreValues />
          <WhyHire /> 
          <Services />
          <Expertise />
          <Tools />
          <Projects />
          <Engagement />

        </main>
        <Footer />
      </div>
      
    </>
  )
}

export default App
