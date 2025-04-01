import { Github, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
 
};

const projects: Project[] = [
  {
    id: 1,
    title: "Awesometodos",
    description: "A full stack web application using the MERN Stack (MongoDB, Express, React, and Node). Our app will be called Awesome Todos, and it will be a minimal Todo app with full CRUD (Create, Read, Update, and Delete) functionality.",
    image: "https://scontent.filo1-1.fna.fbcdn.net/v/t1.15752-9/487404176_531280599666818_7290581135624026081_n.png?stp=dst-png_s843x403&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHYzYs36Jgtc0zTlo2Fe340Zr7MiiDoq95mvsyKIOir3i2qWhk0Vt7pd3lx2yTlhz02HdCbtkmjlQryv8F3jlWU&_nc_ohc=91LTzsi--IIQ7kNvgHHyEha&_nc_oc=AdnzupP5fRSZAh44Tq-zvI19d22ZoqRUORG09_pt30X4B5_W8vczAvrc2W2-Wf3ma9A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.filo1-1.fna&oh=03_Q7cD1wElim3T8BDkb6WUdcEcg4F79No3toYS31D5_JdKn49VlQ&oe=6811B02D",
    tags: ["MonggoDB", "Express.js", "React.js", "Node.js"],
    githubLink: "https://github.com/Krishalogy/awesometodosapp",
  
  },
  {
    id: 2,
    title: "mapaWIT",
    description: "mapaWIT is a virtual map for Western Institute of Technology. This website will help students and guest navigate the campuses without getting lost.​",
    image: "https://scontent.filo1-1.fna.fbcdn.net/v/t1.15752-9/485175837_971241554987874_8454357586527589613_n.png?stp=dst-png_s640x640&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHA5I7A7U5Wq2BzU3ch5P5BUdmtlCpFneJR2a2UKkWd4l1YEqbFEqwH9RVA25dMbKQXHYRQPWnNuvaZsI4Ww55k&_nc_ohc=08PJ2m-K3IoQ7kNvgEtGrBK&_nc_oc=AdlnVo5jcz5QJN8GeN4_forfSh3BA5QkA3PGhhAcvW7YnUaFe2kGQ5mZvzM6m0J11Kg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.filo1-1.fna&oh=03_Q7cD1wFyBv3gj_Yxiy8smW_tsxPrLPpxfNfNvo4CBEarL8WyFg&oe=6811ABB5",
    tags: ["React.js", "Tailwind CSS"],
    githubLink: "https://github.com/LynRuz/mapaWIT",
 
  },
  {
    id: 3,
    title: "Portfolio",
    description: "It’s a personal space online where you can show off your best work, skills, and experience—whether you’re a designer, developer, writer, or any kind of creative. It helps potential clients or employers see what you’re all about and makes it easy for them to connect with you.​",
    image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/487142955_669669258939126_5450119393918574070_n.png?stp=dst-png_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHSgAobhN3q2oM63vXBC4DuoRcVa8aUFvOhFxVrxpQW8yzuh3_qNz9s-IoSFend92LJCvbZdCdJsXOs8Khcbjqz&_nc_ohc=FHVnX87X30EQ7kNvgF4eA4Z&_nc_oc=Adm58sIk_2Mn--8JUN4paKvHdj4ZOiFV2pwLlsBUquY1oVeP-Ops2lOPy77APIM2IOQ&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&oh=03_Q7cD1wEDkWo6Ocu45M0ZyxHsuWtEmdq08LPmyXQ8blfl8tCxhA&oe=6812C30A",
    tags: ["React.js", "Tailwind CSS"],
    githubLink: "https://github.com/Krishalogy/Krisha-Portfolio",
 
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-portfolio-dark bg-stars bg-cover relative">
      <div className="absolute top-0 left-0 w-full h-full bg-space-pattern bg-no-repeat bg-cover opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
            My Recent <span className="text-pink-500">Works</span>
          </h2>
          <p className="text-portfolio-gray font-poppins">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-portfolio-darker bg-opacity-95 border border-pink-500 border-opacity-20 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-portfolio-purple/10 transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 font-poppins">{project.title}</h3>
        <p className="text-portfolio-gray text-sm mb-4 font-poppins leading-relaxed line-clamp-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-pink-500 bg-opacity-20 text-pink-500 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <ProjectButton icon={<Github size={18} />} label="GitHub" href={project.githubLink} />
        
        </div>
      </div>
    </div>
  );
};

const ProjectButton = ({ icon, label, href }: { 
  icon: React.ReactNode; 
  label: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-pink-500 bg-opacity-20 hover:bg-opacity-30 text-pink-500 rounded-md transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="font-poppins font-medium">{label}</span>
    </a>
  );
};

export default ProjectsSection;