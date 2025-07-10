export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  
  {
    title: "ConvoFlow- Full Stack Real-time Chat Application",
    techs: ["Next.js 14","React","Tailwind","Socket.IO","Lucia Auth","Drizzle ORM","Supabase","React Query"],
    link:  "https://github.com/Vansh479/ConvoFlow",
  },
  {
    title: "CipherThreads– Parallel File Encryptor/Decryptor",
    techs: ["React", "Node.js", "Express", "Tailwind CSS", "Recharts" ],
    link:  "https://github.com/Vansh479/CipherThreads",
  },
  {
    title: "Fintrack- Parallelized Market Data Analyzer",
    techs: ["Python", "YahooFinance", "Pandas"],
    link: "https://github.com/Vansh479/FinTrack",
  },
  {
    title: "Portfolio Theme using Astro",
    techs: ["Astro", "Cloudfare", "Tailwind"],
    link: "https://github.com/Vansh479/vanshrawat",
  },
  
  ];

export default projects;
