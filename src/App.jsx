
import  Hero  from './sections/Hero';
import  About  from './sections/About';
import Navbar from './layout/navbar';
import CoreValues from './sections/CoreValues';
import WhyHire from './sections/WhyHire';
import { Footer } from './layout/footer';
import Services from './sections/Services';

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

        </main>
        <Footer />
      </div>
      
    </>
  )
}

export default App
