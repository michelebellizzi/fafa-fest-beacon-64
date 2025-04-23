
const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero image with overlay */}
      <img 
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
        alt="Fafafest Music Festival" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg tracking-tight">FAFAFEST</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto drop-shadow-md font-light">
            Independent Music Festival
          </p>
          <p className="text-md md:text-lg max-w-xl mx-auto tracking-widest">
            JUNE 15-18, 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
