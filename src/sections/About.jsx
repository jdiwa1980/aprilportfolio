const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background-litegray py-32"
    > 
      
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-end items-center opacity-50 pointer-events-none">
        <img
          src="/sections/about_background.png"
          alt="workspace"
          className="w-full max-w-6xl object-contain animate-fade-in animation-delay-300"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        
        <div className="max-w-2xl space-y-8 lg:pl-10">
          
          <div className="text-darkgrey animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Hi, I'm
            </h2>
          </div>

          <h1 className="text-darkgrey italic text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
            April Rose Bertin
          </h1>

          <div className="text-darkgrey space-y-4 animate-fade-in animation-delay-200">
            <p>
              With 7+ years of experience in operations support, project
              coordination, and brand administration, I bring order to complexity
              and momentum to every project I touch.
            </p>

            <p>
              From retail fit-outs to corporate builds, I've successfully delivered
              projects end-to-end across fast-paced, regulated environments —
              managing timelines, budgets, compliance, and stakeholder
              expectations with precision.
            </p>

            <p>
              I'm the person who keeps projects moving, teams aligned, and
              clients confident. Organized systems, clear communication, and
              seamless execution aren't just goals — they're my standard.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;