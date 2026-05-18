
import  Hero  from './sections/Hero';
import  About  from './sections/About';
import Navbar from './layout/navbar';

function App() {
  

  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <main>
          <Hero />
          <About></About>
        </main>
      </div>
      
    </>
  )
}

export default App
