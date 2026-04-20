import React, { useState } from 'react';
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  Smartphone, Layout, PenTool, Code, 
  Mail, Phone, MapPin, ChevronRight, Download 
} from 'lucide-react';
// import my from './assets/my.jpg';
// --- Shared Components ---

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
  </div>
);

const Button = ({ children, primary, className = "" }) => {
  return (
    <button 
      className={`px-8 py-3 rounded text-sm font-semibold transition-all duration-300 ${
        primary 
          ? "bg-orange-500 text-white hover:bg-orange-600" 
          : "bg-transparent border border-gray-600 text-white hover:border-orange-500 hover:text-orange-500"
      } ${className}`}
    >
      {children}
    </button>
  );
};

// --- Sections ---

const Navbar = ({active}) => {
  const li = ['Home', 'Skills', 'About me', 'Projects', 'Contact me'];
  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-6 bg-[#1a1a1a] sticky top-0 z-50">
      <div className="text-2xl font-bold text-white">
        <span className="text-orange-500">S</span>hivam
      </div>
      <div className="hidden md:flex space-x-8 text-white">
        {li.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className={`hover:text-orange-500 transition-colors ${
            active===item
              ?"text-orange-500"
              :"text-white"
          } `}>
            {item}
          </a>
        ))}
      </div>
      <Button primary className='shake-btn md:animate-none'>Hire Me</Button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-[#1a1a1a]">
      <div className="md:w-1/2 mt-10 md:mt-0 space-y-6">
        <h3 className="text-xl text-white">Hi I am</h3>
        <p className="text-orange-500 text-xl font-semibold">Shivam Sharma</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Full Stack <br /> Web Developer
        </h1>
        <div className="flex space-x-4 pt-4">
          <Facebook className="text-white hover:text-orange-500 cursor-pointer" />
          <Twitter className="text-white hover:text-orange-500 cursor-pointer" />
          <Instagram className="text-white hover:text-orange-500 cursor-pointer" />
          <Linkedin className="text-white hover:text-orange-500 cursor-pointer" />
        </div>
        <div className="flex space-x-4 pt-6">
          <Button primary>Hire Me</Button>
          <Button>Download CV</Button>
        </div>
        
        {/* Stats Card */}
        <div className="bg-[#242424] p-6 rounded-lg mt-12 flex justify-between max-w-md border-l-4 border-orange-500">
          <div>
            <h4 className="text-orange-500 text-2xl font-bold">Fresher</h4>
            <p className="text-gray-400 text-sm">Experience</p>
          </div>
          <div>
            <h4 className="text-orange-500 text-2xl font-bold">30+</h4>
            <p className="text-gray-400 text-sm">Project done</p>
          </div>
          <div>
            <h4 className="text-orange-500 text-2xl font-bold">10+</h4>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center relative">
        <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-b from-gray-800 to-[#1a1a1a] rounded-full absolute top-0 z-0"></div>
        {/* Placeholder for User Image - Replace src with actual image */}
        <img 
          src="/my.jpg" 
          alt="Profile" 
          className="relative z-10 w-80 md:w-[450px] grayscale hover:grayscale-0 transition-all duration-500 object-cover rounded-b-full"
        />
      </div>
    </section>
  );
};

const SkillsMarquee = () => {
  const skills = [
    { icon: <Layout />, title: "React" },
    { icon: <Smartphone />, title: "Node.js" },
    { icon: <Code />, title: "MongoDB" },
    { icon: <PenTool />, title: "Tailwind" },
  ];

  return (
    <section id="skills" className="py-20 bg-[#1a1a1a] overflow-hidden">
      
      <SectionTitle 
        title="Tech Stack I Work With"
        subtitle="Technologies I use to build modern web applications"
      />

      <div className="relative overflow-hidden">
        <div className="marquee">
          
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-4 mx-8 bg-[#242424] px-6 py-4 rounded-xl border border-gray-700 text-white transition-all duration-300 hover:border-orange-500 hover:bg-[#2a2a2a] hover:scale-105 hover:ring-2 hover:ring-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              <div className="text-orange-500">
                {React.cloneElement(skill.icon, { size: 28 })}
              </div>
              <span className="text-white font-medium whitespace-nowrap">
                {skill.title}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

const About = () => {

  const skills = [
    { title: "React", level: "Advanced" },
    { title: "Node.js", level: "Intermediate" },
    { title: "MongoDB", level: "Intermediate" },
    { title: "Tailwind CSS", level: "Advanced" },
    { title: "JavaScript", level: "Advanced" },
    { title: "Figma", level: "Intermediate" },
  ];

  return (
    <section id="aboutme" className="px-6 md:px-20 py-20 bg-[#1a1a1a]">
      <SectionTitle title="About Me" subtitle="Turning ideas into real web applications" /> 
      <div className="flex flex-col md:flex-row items-center gap-12 justify-center-safe">
        <div className="md:w-1/2 relative">
             {/* Placeholder for User Image */}
             <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
            <img 
              src="/my2.jpg" 
              alt="About" 
              className="relative z-10 rounded-xl grayscale hover:grayscale-0 transition-all duration-500 w-full max-w-md"
            />
        </div>
        <div className="md:w-1/2 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            I’m a Full Stack Developer who enjoys building fast, scalable, and user-friendly web applications.
I work mainly with React, Node.js, and modern web technologies to create clean and efficient digital experiences. I’m constantly learning and improving my skills by building real-world projects.Currently, I’m focused on sharpening my development skills and looking for opportunities to grow as a developer.
          </p>
          
          {/* Circular Skills */}
          <div className="flex flex-wrap gap-4 py-6">
  {skills.map((skill) => (
    <div
      key={skill.title}
      className="group relative px-5 py-3 rounded-full bg-[#242424] border border-gray-700 text-white text-sm font-medium cursor-pointer transition-all duration-300 hover:border-orange-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]"
    >
      {skill.title}

      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all text-xs bg-orange-500 text-white px-2 py-1 rounded whitespace-nowrap">
        {skill.level}
      </span>
    </div>
  ))}
</div>

          <Button primary>Download CV</Button>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Web App", "Frontend"];

  const projects = [
    {
      id: 1,
      title: "Food & Grocery Delivery Platform",
      cat: "Full Stack",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      tech: ["React", "Node.js", "MongoDB", "Razorpay"],
      live: "https://quickserveio.netlify.app/",
      github: "#",
      desc: "A full-stack delivery platform for ordering food and groceries with integrated payments.",
    },
    {
      id: 2,
      title: "AI Crop Disease Detection",
      cat: "Web App",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      tech: ["Python", "Streamlit", "AI"],
      live: "https://smart-crop-sim.streamlit.app/",
      github: "#",
      desc: "AI-based crop disease detection simulation with real-time prediction visualization.",
    },
    {
      id: 3,
      title: "Student Management System",
      cat: "Frontend",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      tech: ["React", "JavaScript"],
      live: "#",
      github: "#",
      desc: "Interactive frontend system for managing student data with validation and dynamic UI.",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.cat === filter);

  return (
    <section id='projects' className="px-6 md:px-20 py-20 bg-[#1a1a1a]">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          My Projects
        </h2>
        <p className="text-gray-400">
          Real-world projects showcasing my development skills
        </p>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              filter === cat
                ? "bg-orange-500 border-orange-500 text-white"
                : "border-gray-600 text-gray-400 hover:border-orange-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl border border-gray-700 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1.2 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-106"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              
              <h3 className="text-white text-xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-2">
                {project.tech.join(" • ")}
              </p>

              <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-orange-500 text-sm hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-300 text-sm hover:underline"
                >
                  GitHub
                </a>
              </div>

            </div>
            
           
          </div>
          
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contactme" className="px-6 md:px-20 py-20 bg-[#1a1a1a]">
      <SectionTitle title="Contact Me" subtitle="“Open to internships, freelance work, and collaboration opportunities.”" />
      
      <div className="max-w-4xl mx-auto">
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full bg-[#242424] text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <input type="email" placeholder="Email" className="w-full bg-[#242424] text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <input type="text" placeholder="Phone Number" className="w-full bg-[#242424] text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <input type="text" placeholder="Subject" className="w-full bg-[#242424] text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <textarea rows="6" placeholder="Message" className="w-full bg-[#242424] text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            <div className="text-center">
                <Button primary className="px-12">Send Message</Button>
            </div>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#242424] py-10 mt-10">
      <div className="text-center space-y-6">
        <div className="text-2xl font-bold text-white">
          <span className="text-orange-500">S</span>hivam
        </div>
        <div className="flex justify-center space-x-8 text-white text-sm">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(link => (
            <a key={link} href="#" className="hover:text-orange-500">{link}</a>
          ))}
        </div>
        <div className="flex justify-center space-x-6">
          <Facebook className="text-white w-5 h-5 hover:text-orange-500 cursor-pointer" />
          <Twitter className="text-white w-5 h-5 hover:text-orange-500 cursor-pointer" />
          <Instagram className="text-white w-5 h-5 hover:text-orange-500 cursor-pointer" />
          <Linkedin className="text-white w-5 h-5 hover:text-orange-500 cursor-pointer" />
        </div>
        <div className="bg-black/20 py-4 mt-6">
            <p className="text-gray-500 text-xs">© 2023 <span className="text-orange-500">Shivam</span> All Rights Reserved , Inc.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

function App() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;