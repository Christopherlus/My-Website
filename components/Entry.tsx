import React from 'react';

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

export default Entry;
