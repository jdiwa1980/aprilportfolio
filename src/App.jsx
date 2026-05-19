
import  Hero  from './sections/Hero';
import  About  from './sections/About';
import Navbar from './layout/navbar';
import CoreValues from './sections/CoreValues';
import WhyHire from './sections/WhyHire';

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

        </main>
      </div>
      
    </>
  )
}

export default App
