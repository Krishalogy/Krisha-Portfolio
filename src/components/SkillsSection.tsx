
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 65 },
      { name: "TypeScript", level: 65 },
      { name: "Next.js", level: 65 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Python", level: 50 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 10 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 50 },
      { name: "Docker", level: 10 },
      { name: "AWS", level: 10 },
      { name: "CI/CD", level: 10 },
      { name: "Testing", level: 10 },
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(true);

  const handleCategoryChange = (index: number) => {
    if (index !== activeCategory) {
      setSkillsVisible(false);
      setTimeout(() => {
        setActiveCategory(index);
        setSkillsVisible(true);
      }, 300);
    }
  };

  return (
    <section id="skills" className="py-20 bg-portfolio-dark bg-stars bg-cover relative">
      <div className="absolute top-0 left-0 w-full h-full bg-space-pattern bg-no-repeat bg-cover opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
            Know Who <span className="text-pink-500">I AM</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
              Hi Everyone, I am <span className="text-pink-500">Krisha Geacaniga</span> from Guimbal, Iloilo.
            </h3>
            
            <p className="text-portfolio-gray mb-4 font-poppins leading-relaxed">
              I am a student at Western Institute of Technology, taking up Bachelor of Science in Information Technology.
            </p>
            
            <p className="text-portfolio-gray mb-8 font-poppins leading-relaxed">
            I am a dedicated student striving to learn and grow in the world of UI/UX design.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-4 font-poppins">
              Apart from coding, some other activities that I love to do!
            </h3>
            
            <ul className="space-y-2 text-portfolio-gray mb-8">
              <li className="flex items-center font-poppins">
                <span className="text-pink-500 mr-2">👍</span> Reading Wattpad Stories
              </li>
              <li className="flex items-center font-poppins">
                <span className="text-pink-500 mr-2">👍</span> Watching Movies
              </li>
              <li className="flex items-center font-poppins">
                <span className="text-pink-500 mr-2">👍</span> Travelling
              </li>
              <li className="flex items-center font-poppins">
                <span className="text-pink-500 mr-2">👍</span> Playing Frisbee
              </li>
            </ul>
            
            <div className="bg-portfolio-darker p-4 rounded-lg border border-pink-500 border-opacity-20">
              <p className="text-white font-poppins italic">
                "Kung oras mo, Oras mo run gid"
              </p>
              <p className="text-right text-pink-500 font-poppins mt-2">
                — Rags
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 bg-portfolio-darker bg-opacity-70 rounded-xl p-8 border border-portfolio-purple border-opacity-20">
            <h3 className="text-xl font-bold text-white mb-6 font-poppins">
              Professional <span className="text-pink-500">Skillset</span>
            </h3>
            
            <div className="flex mb-6 border-b border-pink-500 border-opacity-20 pb-4">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(index)}
                  className={`flex-1 py-2 font-poppins font-medium ${
                    activeCategory === index
                      ? 'text-pink-500 border-b-2 border-pink-500'
                      : 'text-portfolio-gray hover:text-white'
                  } transition-colors`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className={`space-y-6 transition-opacity duration-300 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}>
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white font-poppins">{skill.name}</span>
                    <span className="text-portfolio-gray font-poppins">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-portfolio-darker" 
                    indicatorClassName="bg-pink-500" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
