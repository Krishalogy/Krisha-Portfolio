import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-portfolio-darker bg-cover pt-16 overflow-hidden"
      style={{
        backgroundImage: `url('https://media.giphy.com/media/FlodpfQUBSp20/giphy.gif?cid=790b76111e64ojob249bxg0ednh4iu6dp4oxy9zzhx0icy20&ep=v1_gifs_search&rid=giphy.gif&ct=g')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {loading ? (
        // Loading spinner with black background
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-opacity-50 mb-4"></div>
          <p className="text-white font-bold text-xl text-center">Loading...</p>
        </div>
      ) : (
        // Main content
        <div className="container mx-auto px-4 z-10 mt-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-white text-3xl md:text-4xl font-medium mb-4 font-poppins animate-fade-in">
                Hi There! <span className="inline-block animate-[wave_2s_ease-in-out_infinite]">👋</span>
              </h2>

              <h1
                className="text-4xl md:text-6xl font-bold mb-4 font-poppins animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                I'M{' '}
                <span className="text-pink-500 text-6xl font-bold font-poppins moving-text">
                  KRISHA GEACANIGA
                </span>
              </h1>

              <h3
                className="text-xl md:text-2xl text-portfolio-gray mb-8 font-poppins animate-fade-in tracking-wider"
                style={{ animationDelay: '0.4s' }}
              >
                UI/UX Designer <span className="mx-2">|</span> Front end Developer
              </h3>

              <button
                onClick={scrollToAbout}
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-full transition-colors animate-fade-in flex items-center gap-2 font-poppins"
                style={{ animationDelay: '0.6s' }}
              >
                Learn More
                <ArrowDown size={18} />
              </button>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <img
                src="https://scontent.filo1-1.fna.fbcdn.net/v/t1.15752-9/486163325_659987313432383_7355113490355019286_n.png?stp=dst-png_s480x480&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFjAizMgU1y8ER7HG7QV5-drQW3sVqihbmtBbexWqKFuWcYppPWK2huGKq0fXMwfCB5K0elxOPtSf-DKQQ0cHvJ&_nc_ohc=olgjtB69M7EQ7kNvgFzI3mt&_nc_oc=Adkt7AgWKY85rV1XDsj9VWdjeEi5YeDgxyYF2hVP4JDSfVHHjwVxC6-W5T3J2N9U0mM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.filo1-1.fna&oh=03_Q7cD1wHivB-J-YjcW2ItrkvB6dhkf8DnHMUvcTKUltR9xRgc9w&oe=6811AE0B"
                alt="Developer illustration"
                className="w-full max-w-lg animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;