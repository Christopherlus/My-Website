import { ExperienceItem, EducationItem, SkillSet, ContactInfo } from './types';

export const CONTACT: ContactInfo = {
  phone: "+44 7760 427849",
  email: "chrischarlesclay at gmail dot com",
  linkedin: "https://www.linkedin.com/in/christopher-clay-aa825b280/",
};

export const EDUCATION: EducationItem[] = [
  {
    institution: "University of Bristol",
    location: "Bristol, UK",
    degree: "BSc Mathematics",
    period: "September 2025 - June 2028",
    details: []
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "dataset-project",
    role: "Dataset on AI Safety Fellowship Alumni",
    organization: "Personal Project",
    location: "Remote",
    period: "October - December 2025",
    bullets: [
      "Compiled and published a [dataset](https://forum.effectivealtruism.org/posts/SJBBgupFx7SXyBj2B/where-do-ai-safety-fellows-go-analyzing-a-dataset-of-600) of 600+ alumni of AI Safety Fellowships.",
      "Analysed the data to show that over 10% of alumni have done multiple fellowships, revealing fellowship cycles really are a thing.",
      "Got feedback from Coefficient Giving and Talos Network saying they found the work useful."
    ]
  },
  {
    id: "impact-research",
    role: "AI Governance Researcher",
    organization: "Impact Research Groups",
    location: "London, UK",
    period: "July - September 2025",
    bullets: [
      "Set the direction for a research team for a paper focusing on alumni outcomes of AI Safety training programs.",
      "Single-handedly produced the Linkedin scraping side of the output paper."
    ]
  },
  {
    id: "leaf-fellow",
    role: "Leaf Fellow",
    organization: "Leaf",
    location: "Remote",
    period: "August – September 2025",
    bullets: [
      "Selected for further individual mentorship and funding from top 0.5% of applicants for the Mathematics of Morality course.",
      "[Produced an EA Forum Post](https://forum.effectivealtruism.org/posts/m5dDrMfHjLtMu293G/ai-safety-s-talent-pipeline-is-over-optimised-for) advocating for greater support for non-research roles within AI Safety."
    ]
  },
  {
    id: "bluedot",
    role: "AI Safety Fundamentals Participant",
    organization: "Bluedot Impact",
    location: "Remote",
    period: "October 2024 - February 2025",
    bullets: [
      "Selected as one of five sub-university level participants in a competitive international cohort.",
      "Recognised by facilitators as the strongest contributor within my group.",
      "Produced an [accessible explainer on superposition](https://chrisclay.substack.com/p/what-is-superposition-in-neural-networks?triedRedirect=true) for my final project."
    ]
  },
  {
    id: "sales-assistant",
    role: "Sales Assistant",
    organization: "Rushfields Plant Centre",
    location: "Brighton, UK",
    period: "September 2024 – February 2025",
    bullets: [
      "Provided customer support and sales in a high-footfall environment over the Christmas period.",
      "Designed product displays and optimised shop layouts.",
      "Assisted with inventory and seasonal marketing."
    ]
  },
  {
    id: "non-trivial",
    role: "Non-Trivial Fellow",
    organization: "Non-Trivial Ventures",
    location: "Remote",
    period: "July 2024 - August 2024",
    bullets: [
      "Selected for a highly competitive fellowship (1.48% acceptance rate) focused on tackling the world's most pressing problems.",
      "Participated in workshops and mentoring sessions with leading thinkers, including Peter Singer and Yoshua Bengio.",
      "Produced a research project on how emerging technologies will affect nuclear deterrence and stability."
    ]
  },
  {
    id: "ricardo",
    role: "Engineering Intern", 
    organization: "Ricardo Group",
    location: "Remote", 
    period: "October 2022 - October 2023",
    bullets: [
      "Collaborated on the design and build of a demonstration Three-Phase Brushless DC Motor.",
      "Programmed the system with Arduino, achieving controlled spin at 1,300 RPM.",
      "Applied principles of engineering design, mathematical modelling, and teamwork in a real-world context."
    ]
  }
];

export const PROJECTS: ExperienceItem[] = [
  {
    id: "global-challenges",
    role: "Global Challenges Project Attendee",
    organization: "Global Challenges Project",
    location: "Oxford, UK",
    period: "March 2025",
    bullets: [
      "Selected to attend a prestigious weekend retreat on existential and technological risks.",
      "Participated in workshops led by experts in AI Safety and Biosecurity.",
      "Collaborated with peers on scenario planning and global risk mitigation strategies."
    ]
  },
  {
    id: "substack",
    role: "Substack Writer",
    organization: "Personal Project",
    location: "Remote",
    period: "February 2025 - Present",
    bullets: [
      "Regularly publish essays on AI Safety, effective altruism, personal development, and philosophy.",
      "Use the platform to share my thoughts on complex ideas and reflect on emerging global challenges."
    ]
  },
  {
    id: "crest-award",
    role: "Gold CREST Award Engineering Project",
    organization: "",
    location: "Brighton, UK",
    period: "",
    bullets: [] 
  }
];

export const LEADERSHIP: ExperienceItem[] = [
  {
    id: "ea-global",
    role: "EA Global Volunteer",
    organization: "Centre for Effective Altruism",
    location: "London, UK",
    period: "June 2025",
    bullets: [
      "Room managed discussions on the EA movement in ethnic minority groups and LICs.",
      "Ran the talk on Socioeconomic Diversity in EA when the facilitator didn’t show up.",
      "Facilitated the nuclear weapons meetup."
    ]
  },
  {
    id: "changing-chalk",
    role: "‘Changing Chalk’ Volunteer",
    organization: "National Trust",
    location: "Brighton, UK",
    period: "September 2024 - June 2025",
    bullets: [
      "Helped out in scrub bashing on the South Downs to preserve the chalk habitat.",
      "Volunteered on open days to inform visitors of the unique heritage of the downs and the rare species inhabiting them."
    ]
  },
  {
    id: "piano",
    role: "Piano Grade 8",
    organization: "ABRSM",
    location: "Brighton, UK",
    period: "September 2022 – June 2023",
    bullets: []
  }
];

export const SKILLS = [
  "Python", "Writing", "Problem Solving", "Research"
];

export const INTERESTS = [
  "Effective Altruism", "Jazz Piano", "Music Production", "Photography", "Cooking", "Hiking", "Calisthenics"
];
