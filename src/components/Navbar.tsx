
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, FileText, Contact } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-portfolio-darker bg-opacity-90 backdrop-blur-md border-b border-portfolio-purple border-opacity-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-pink-500 text-3xl font-bold font-poppins">
          Rag's Portfolio
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavItem 
            icon={<Home size={18} />} 
            label="Home" 
            isActive={activeSection === 'home'} 
            onClick={() => scrollToSection('home')} 
          />
          <NavItem 
            icon={<User size={18} />} 
            label="About" 
            isActive={activeSection === 'about'} 
            onClick={() => scrollToSection('about')} 
          />
          <NavItem 
            icon={<Briefcase size={18} />} 
            label="Projects" 
            isActive={activeSection === 'projects'} 
            onClick={() => scrollToSection('projects')} 
          />
          <NavItem 
            icon={<FileText size={18} />} 
            label="Skills" 
            isActive={activeSection === 'skills'} 
            onClick={() => scrollToSection('skills')} 
          />

          <NavItem 
            icon={<FileText size={18} />} 
            label="Contact" 
            isActive={activeSection === 'contact'} 
            onClick={() => scrollToSection('contact')} 
          />
          
         
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-purple p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-portfolio-darker border-t border-portfolio-purple border-opacity-20 py-4">
          <div className="flex flex-col space-y-4 px-6">
            <MobileNavItem 
              icon={<Home size={18} />} 
              label="Home" 
              onClick={() => scrollToSection('home')} 
            />
            <MobileNavItem 
              icon={<User size={18} />} 
              label="About" 
              onClick={() => scrollToSection('about')} 
            />
            <MobileNavItem 
              icon={<Briefcase size={18} />} 
              label="Projects" 
              onClick={() => scrollToSection('projects')} 
            />
            <MobileNavItem 
              icon={<FileText size={18} />} 
              label="Skills" 
              onClick={() => scrollToSection('skills')} 
            />

            <MobileNavItem 
              icon={<FileText size={18} />} 
              label="Contact" 
              onClick={() => scrollToSection('contact')} 
            />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ icon, label, isActive, onClick }: { 
  icon: React.ReactNode; 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 font-poppins ${
      isActive 
        ? 'text-portfolio-white' 
        : 'text-portfolio-gray hover:text-portfolio-white'
    } transition-colors`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const MobileNavItem = ({ icon, label, onClick }: { 
  icon: React.ReactNode; 
  label: string; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-3 text-portfolio-gray hover:text-portfolio-white w-full py-2 px-4 transition-colors"
  >
    {icon}
    <span className="font-poppins">{label}</span>
  </button>
);

export default Navbar;
