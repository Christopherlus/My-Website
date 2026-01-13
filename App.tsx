import React, { useState } from 'react';
import { 
  CONTACT, 
  EDUCATION, 
  EXPERIENCE, 
  PROJECTS, 
  LEADERSHIP, 
  SKILLS, 
  INTERESTS 
} from './constants';

// --- INLINED COMPONENTS ---

// 1. RedactedText Component
interface RedactedTextProps {
  text: string;
  alwaysVisible?: boolean;
}

const RedactedText: React.FC<RedactedTextProps> = ({ text, alwaysVisible = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (alwaysVisible) {
    return <span>{text}</span>;
  }

  return (
    <span 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative inline-block px-1 cursor-help transition-all duration-300
        ${isHovered ? 'bg-transparent text-ink' : 'bg-ink text-transparent select-none'}
      `}
      title="Hover to declassify"
    >
      {text}
      {!isHovered && (
        <span className="absolute inset-0 bg-ink opacity-90 pointer-events-none"></span>
      )}
    </span>
  );
};

// 2. Stamp Component
interface StampProps {
  text: string;
  variant?: 'red' | 'black';
  className?: string;
  rotation?: string;
}

const Stamp: React.FC<StampProps> = ({ text, variant = 'red', className = '', rotation = '-rotate-12' }) => {
  const colorClass = variant === 'red' ? 'text-alert border-alert' : 'text-ink border-ink';
  
  return (
    <div className={`
      absolute z-10 opacity-80 pointer-events-none select-none mix-blend-multiply
      border-4 border-double rounded-lg px-4 py-1 text-center font-bold uppercase tracking-widest
      ${colorClass} ${rotation} ${className} stamp-box
    `}>
      {text}
    </div>
  );
};

// 3. Entry Component & Helper
interface EntryProps {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  details: string[];
  link?: string;
}

// Parse markdown-style links: [text](url)
const parseWithLinks = (text: string) => {
  // Regex to match [text](url) pattern
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  
  return parts.map((part, index) => {
    const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (match) {
      return (
        <a 
          key={index} 
          href={match[2]} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline decoration-dotted hover:bg-ink hover:text-paper transition-colors"
        >
          {match[1]}
        </a>
      );
    }
    return part;
  });
};

const Entry: React.FC<EntryProps> = ({ title, subtitle, location, period, details, link }) => {
  return (
    <div className="mb-6 break-inside-avoid">
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
        <h3 className="font-bold text-lg leading-tight uppercase tracking-tight">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:bg-ink hover:text-paper transition-colors">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <span className="text-sm font-bold md:ml-4 whitespace-nowrap">{location}</span>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 border-b border-neutral-600 pb-1">
        <span className="italic font-semibold">{subtitle}</span>
        <span className="text-sm italic opacity-80">{period}</span>
      </div>

      <ul className="list-none pl-2 md:pl-4 space-y-1">
        {details.map((detail, index) => (
          <li key={index} className="text-sm md:text-base leading-relaxed relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-neutral-500">
            {parseWithLinks(detail)}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-black py-4 px-2 md:py-12 md:px-0 flex justify-center font-mono">
      <div className="w-full max-w-4xl bg-paper text-ink shadow-2xl min-h-[1100px] relative overflow-hidden print:shadow-none print:w-full border border-neutral-800">
        
        {/* Decorative Binding Holes (Left side) */}
        <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between py-12 md:hidden">
           {[...Array(20)].map((_, i) => (
             <div key={i} className="w-2 h-2 rounded-full bg-neutral-800 mb-8"></div>
           ))}
        </div>

        {/* Paper Header / Meta info */}
        <div className="p-8 md:p-12 border-b-2 border-ink relative">
          
          {/* Profile Photo - Stapled Look */}
          <div className="hidden md:block absolute top-12 right-12 z-20">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-neutral-400 opacity-80 rotate-2 shadow-sm z-30"></div> {/* Staple */}
              <img 
                src="profile.jpg" 
                alt="Chris Clay" 
                className="w-32 h-40 object-cover grayscale contrast-125 border-4 border-white shadow-xl rotate-2"
              />
            </div>
          </div>

          <Stamp text="CONFIDENTIAL" className="top-10 right-32 text-xl md:text-4xl opacity-90 z-30" rotation="-rotate-6" />
          
          <div className="flex justify-between text-xs md:text-sm text-neutral-500 mb-8 uppercase tracking-widest relative z-10">
            <div>
              <p>Doc ID: CC-2025-V2</p>
              <p>Class: Unclassified//Dark</p>
            </div>
            <div className="text-right md:mr-48">
               <p>Date: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
            </div>
          </div>

          <div className="text-center mb-8 relative z-10 md:mr-32">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2 text-ink uppercase">Chris Clay</h1>
            <div className="w-32 h-1 bg-ink mx-auto mb-4"></div>
            <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest text-neutral-400">
              Maths Student & AI Governance Researcher
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm md:text-base border-t border-dotted border-neutral-600 pt-4 mt-4">
             {/* Email displayed as text only for security */}
             <span className="hover:bg-ink hover:text-paper px-1 transition-colors cursor-text">
               E: {CONTACT.email}
             </span>
             <span className="hidden md:inline text-neutral-600">|</span>
             <a href="tel:+447760427849" className="hover:bg-ink hover:text-paper px-1 transition-colors">
               T: {CONTACT.phone}
             </a>
             <span className="hidden md:inline text-neutral-600">|</span>
             <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:bg-ink hover:text-paper px-1 transition-colors underline decoration-dotted">
               LINKEDIN PROFILE
             </a>
          </div>
        </div>

        {/* Main Content Body */}
        <div className="p-6 md:p-12 space-y-10 relative">
          
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03] overflow-hidden">
            <h1 className="text-[200px] font-bold -rotate-45 whitespace-nowrap text-ink">TOP SECRET</h1>
          </div>

          {/* Education Section */}
          <section className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold bg-ink text-paper px-2 py-1 uppercase tracking-widest">Education</h2>
              <div className="h-0.5 bg-ink flex-grow"></div>
            </div>
            {EDUCATION.map((edu, idx) => (
              <Entry 
                key={idx}
                title={edu.institution}
                subtitle={edu.degree}
                location={edu.location}
                period={edu.period}
                details={edu.details}
              />
            ))}
          </section>

          {/* Experience Section */}
          <section className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold bg-ink text-paper px-2 py-1 uppercase tracking-widest">Professional Experience</h2>
              <div className="h-0.5 bg-ink flex-grow"></div>
            </div>
            {EXPERIENCE.map((exp) => (
              <Entry 
                key={exp.id}
                title={exp.role}
                subtitle={exp.organization}
                location={exp.location}
                period={exp.period}
                details={exp.bullets}
                link={exp.link}
              />
            ))}
          </section>

          {/* Projects Section */}
          <section className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold bg-ink text-paper px-2 py-1 uppercase tracking-widest">Projects & Outside Experience</h2>
              <div className="h-0.5 bg-ink flex-grow"></div>
            </div>
            {PROJECTS.map((proj) => (
              <Entry 
                key={proj.id}
                title={proj.role}
                subtitle={proj.organization}
                location={proj.location}
                period={proj.period}
                details={proj.bullets}
                link={proj.link}
              />
            ))}
          </section>

          {/* Activities & Leadership */}
          <section className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold bg-ink text-paper px-2 py-1 uppercase tracking-widest">Activities & Leadership</h2>
              <div className="h-0.5 bg-ink flex-grow"></div>
            </div>
            {LEADERSHIP.map((lead) => (
              <Entry 
                key={lead.id}
                title={lead.role}
                subtitle={lead.organization}
                location={lead.location}
                period={lead.period}
                details={lead.bullets}
              />
            ))}
          </section>

          {/* Skills & Interests - Grid Layout */}
          <section className="relative z-10 border-2 border-ink p-6 bg-white/5">
             <Stamp text="VERIFIED" variant="black" className="absolute -top-4 -right-2 rotate-6 text-sm opacity-50" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <h3 className="font-bold underline mb-3 uppercase">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill, i) => (
                      <span key={i} className="bg-neutral-700 text-neutral-200 px-2 py-0.5 text-sm font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
               </div>
               <div>
                  <h3 className="font-bold underline mb-3 uppercase">Interests</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {INTERESTS.map((interest, i) => (
                      <span key={i} className="text-sm">
                         {/* Randomly redact some interests for the "secret" vibe on hover */}
                        {i % 2 === 0 ? <RedactedText text={interest} /> : interest}
                      </span>
                    ))}
                  </div>
               </div>
             </div>
          </section>
          
          {/* Action Footer */}
          <div className="mt-12 text-center relative z-20">
             <button 
                onClick={() => setShowContact(!showContact)}
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-ink transition-all duration-200 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink border border-ink"
             >
                <span className="absolute inset-0 w-full h-full -mt-1 -ml-1 transition-all duration-200 ease-out bg-alert rounded group-hover:mt-0 group-hover:ml-0"></span>
                <span className="relative text-white">INITIATE CONTACT PROTOCOL</span>
             </button>

             {showContact && (
               <div className="mt-6 p-4 border border-alert bg-red-900/20 text-alert animate-pulse">
                  <p className="font-bold">SECURE CHANNEL OPEN</p>
                  <p className="mt-2 text-ink">Transmission Target: <span className="font-bold text-red-400">{CONTACT.email}</span></p>
               </div>
             )}
          </div>

        </div>

        {/* Footer/Scan lines */}
        <div className="h-4 bg-ink/10 w-full mt-12 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-30"></div>
      </div>
    </div>
  );
}

export default App;
