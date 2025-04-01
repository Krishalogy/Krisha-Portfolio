
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-darker py-8 border-t border-pink-500 border-opacity-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-gray font-poppins">
              &copy; {new Date().getFullYear()} <span className="text-pink-500">Krisha Geacaniga</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <SocialLink icon={<Github size={18} />} href="https://github.com/Krishalogy" />
            <SocialLink icon={<Instagram size={18} />} href="https://www.instagram.com/" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <a 
      href={href}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-darker border border-pink-500 border-opacity-30 text-portfolio-gray hover:text-portfolio-purple hover:border-opacity-100 transition-colors"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default Footer;
