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

const Button = ({ children, primary, className = "" }) => (
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

// --- Sections ---

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-6 bg-[#1a1a1a] sticky top-0 z-50">
      <div className="text-2xl font-bold text-white">
        <span className="text-orange-500">S</span>hivam
      </div>
      <div className="hidden md:flex space-x-8 text-white">
        {['Home', 'Services', 'About us', 'Portfolio', 'Contact us'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-orange-500 transition-colors">
            {item}
          </a>
        ))}
      </div>
      <Button primary>Hire Me</Button>
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

const Services = () => {
  const services = [
    { icon: <Layout />, title: "App Design", desc: "Designing intuitive mobile interfaces." },
    { icon: <Smartphone />, title: "App Design", desc: "Building responsive layouts." },
    { icon: <Code />, title: "Web Design", desc: "Modern web application structures." },
    { icon: <PenTool />, title: "App Design", desc: "Creative graphic solutions." },
  ];

  return (
    <section id="services" className="px-6 md:px-20 py-20 bg-[#1a1a1a]">
      <SectionTitle 
        title="Services" 
        subtitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in." 
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-[#242424] p-8 rounded-xl hover:bg-orange-500 group transition-colors duration-300 cursor-pointer">
            <div className="text-orange-500 group-hover:text-white mb-4 w-12 h-12">
              {React.cloneElement(s.icon, { size: 40 })}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
            <p className="text-gray-400 group-hover:text-gray-100 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="aboutus" className="px-6 md:px-20 py-20 bg-[#1a1a1a]">
      <SectionTitle title="About Me" subtitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in." />
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 relative">
             {/* Placeholder for User Image */}
             <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
            <img 
              src="/my2.jpg" 
              alt="About" 
              className="relative z-10 rounded-xl grayscale hover:grayscale-0 transition-all duration-500 h-180 "
            />
        </div>
        <div className="md:w-1/2 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            I am a passionate UI/UX Designer aiming to create workable, aesthetic, and user-friendly interfaces. 
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
            Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>
          
          {/* Circular Skills */}
          <div className="flex flex-wrap gap-8 py-6">
            {[
              { name: "React", val: 90 }, 
              { name: "Web Design", val: 85 }, 
              { name: "Figma", val: 70 }, 
              { name: "Node.js", val: 95 }
            ].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-[#242424]">
                   {/* Simple SVG Circular Progress */}
                   <svg className="w-full h-full transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="#333" strokeWidth="6" fill="transparent" />
                      <circle cx="48" cy="48" r="40" stroke="#f97316" strokeWidth="6" fill="transparent" 
                              strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - skill.val / 100)} />
                   </svg>
                   <span className="absolute text-white font-bold">{skill.val}%</span>
                </div>
                <span className="text-orange-500 mt-2 font-medium">{skill.name}</span>
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
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'];
  
  // Placeholder project data
  const projects = [1, 2, 3, 4, 5, 6].map(id => ({
    id,
    cat: id % 2 === 0 ? 'Web Design' : 'UI/UX',
    img: `https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`
  }));

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.cat === filter);

  return (
    <section id="portfolio" className="px-6 md:px-20 py-20 bg-[#1a1a1a]">
      <SectionTitle title="My Projects" subtitle="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus." />
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border ${
              filter === cat 
                ? "bg-orange-500 border-orange-500 text-white" 
                : "border-gray-600 text-gray-400 hover:border-orange-500"
            } transition-all`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl">
            <img src={project.img} alt="Project" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <span className="text-orange-500 font-bold mb-2">{project.cat}</span>
              <h3 className="text-white text-xl font-bold">Project Name</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contactus" className="px-6 md:px-20 py-20 bg-[#1a1a1a]">
      <SectionTitle title="Contact Me" subtitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in." />
      
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
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;