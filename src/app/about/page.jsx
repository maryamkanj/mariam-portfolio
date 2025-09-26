'use client';

import { useState, useEffect } from "react";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-grow bg-slate-50 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 min-h-screen relative overflow-hidden">
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .skill-bar {
          transition: width 1.5s ease-in-out;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px-1px rgba(0, 0, 0, 0.1), 0 2px 4px-1px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .section-divider {
          background: linear-gradient(to right, #8b5cf6, #d946ef);
        }
        `}
      </style>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float animation-delay-2000"></div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          <header className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent cursor-pointer">
              Mariam Kanj
            </h1>
            <p className="text-lg text-slate-600 mb-2 cursor-pointer">Full-Stack Web Developer</p>
            <div className="w-24 h-1 section-divider mx-auto rounded-full cursor-pointer"></div>
          </header>

          <section className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 space-y-2">
              <h2 className="text-xl font-semibold text-violet-800 cursor-pointer">Contact</h2>
              <p className="flex items-center gap-2 text-slate-600 cursor-pointer">
                Beirut, Lebanon
              </p>
              <p className="flex items-center gap-2 text-slate-600 cursor-pointer">
                kanjmariam696@gmail.com
              </p>
              <p className="flex items-center gap-2 text-slate-600 cursor-pointer">
                +961 71-419-226
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <a href="https://linkedin.com/in/mariamkanj" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">linkedin.com/in/mariamkanj</a>
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold text-violet-800 mb-2 cursor-pointer">Professional Summary</h2>
              <p className="text-slate-700 leading-relaxed text-base cursor-pointer">
                Results-driven Computer Science graduate with hands-on experience in full-stack web
                development, mobile app development, and data analysis. Skilled in frontend frameworks
                (React, Next.js, Angular, Flutter) and backend technologies (ASP.NET, PHP/Laravel, Node.js, SQL
                Server, MySQL). Adept at building scalable, responsive, and user-friendly applications. Strong
                collaborator in Agile teams with proven problem-solving and debugging abilities. Passionate
                about leveraging technology to deliver impactful solutions.
              </p>
            </div>
          </section>

          <hr className="my-8 border-t border-gray-200 cursor-pointer" />

          <div className="space-y-8">
            <section className="w-full p-6 sm:p-8 bg-white rounded-lg shadow-sm border border-gray-200 hover-lift cursor-pointer">
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent cursor-pointer">Professional Experience</h3>
              <div className="space-y-6">
                {[
                  {
                    company: "Techtalks",
                    position: "Web Development Intern",
                    period: "July 2025 – August 2025",
                    type: "Hybrid",
                    points: ["Built frontend interfaces using Next.js, TypeScript, Tailwind CSS, and shadcn/ui.", "Collaborated with backend developers to integrate Laravel APIs with MySQL databases.", "Worked with Jira for Agile project management and team coordination.", "Strengthened collaboration and problem-solving skills through teamwork in a real-world project."]
                  },
                  {
                    company: "Hirlytics",
                    position: "Web Development Intern",
                    period: "February 2025 – August 2025",
                    type: "Remote",
                    points: ["Designed responsive UI/UX prototypes in Figma and implemented them in React (TypeScript).", "Developed and optimized PHP backend APIs with MySQL integration.", "Ensured cross-browser and mobile compatibility using CSS best practices.", "Troubleshooted, debugged, and optimized performance for production readiness.", "Collaborated closely with a team of developers to deliver the official company website."]
                  },
                  {
                    company: "Coding & Create",
                    position: "Mobile App Development Intern",
                    period: "May 2025 – June 2025",
                    type: "Remote",
                    points: ["Built cross-platform mobile apps using Flutter & Dart for Android and iOS.", "Designed responsive UI/UX interfaces based on modern design principles.", "Solved real-world challenges including debugging, feature implementation, and optimization.", "Collaborated with team leads and peers in an Agile environment using Git for version control."]
                  },
                  {
                    company: "IDS Academy",
                    position: "Web Development Intern",
                    period: "August 2024 – September 2024",
                    type: "Remote",
                    points: ["Built dynamic websites using PHP, HTML, CSS, JavaScript.", "Designed and optimized MySQL databases for scalable CRUD operations.", "Applied OOP principles in PHP for modular and maintainable code.", "Conducted testing and debugging to ensure high performance.", "Contributed to projects in an Agile environment with developers and project managers."]
                  },
                  {
                    company: "IDS Fintech",
                    position: "Software Development Intern",
                    period: "July 2024 – August 2024",
                    type: "Hybrid",
                    points: ["Developed RESTful APIs and controllers using ASP.NET (C#).", "Executed SQL Server CRUD operations for enterprise data management.", "Applied asynchronous programming for improved responsiveness.", "Created dynamic Angular frontends integrated with DevExpress components.", "Ensured seamless frontend-backend integration for enterprise systems."]
                  }
                ].map((exp, index) => (
                  <div key={index} className="pl-4 py-2 border-l border-purple-500 cursor-pointer">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <h4 className="font-semibold text-violet-800 cursor-pointer">{exp.position} - {exp.company}</h4>
                      <span className="text-slate-600 text-sm mt-1 sm:mt-0 cursor-pointer">{exp.period} | {exp.type}</span>
                    </div>
                    <ul className="list-disc ml-5 text-slate-700 text-sm space-y-1 cursor-pointer">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="cursor-pointer">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <div className="w-full p-6 sm:p-8 bg-white rounded-lg shadow-sm border border-gray-200 hover-lift cursor-pointer">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent cursor-pointer">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-violet-800 mb-2 cursor-pointer">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "JavaScript", "TypeScript", "C#", "SQL", "Dart", "Java", "PHP", "C++"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 border border-violet-200 rounded-full text-sm cursor-pointer">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-violet-800 mb-2 cursor-pointer">Web Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Next.js", "Angular", "Node.js", "ASP.NET", "Laravel", "HTML5", "CSS3", "JavaScript (ES6+)"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 border border-violet-200 rounded-full text-sm cursor-pointer">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-violet-800 mb-2 cursor-pointer">Mobile & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Flutter", "Git", "GitHub", "Figma", "Jira", "DevExpress", "MySQL", "SQL Server"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 border border-violet-200 rounded-full text-sm cursor-pointer">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-violet-800 mb-2 cursor-pointer">Core Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Full-Stack Development", "RESTful APIs", "CRUD Operations", "OOP", "Asynchronous Programming", "Responsive UI/UX Design", "Debugging & Optimization", "Agile"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 border border-violet-200 rounded-full text-sm cursor-pointer">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-6 sm:p-8 bg-white rounded-lg shadow-sm border border-gray-200 hover-lift cursor-pointer">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent cursor-pointer">Education & Certifications</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-violet-800 cursor-pointer">Bachelor of Science in Computer Science</h4>
                    <p className="text-slate-600 cursor-pointer">Beirut Arab University, Lebanon | Graduated 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-violet-800 cursor-pointer">Certifications & Training</h4>
                    <ul className="list-disc ml-5 text-slate-700 space-y-1 cursor-pointer">
                      <li className="cursor-pointer">Data Analysis Using SPSS – Beirut Arab University, CEC (2025)</li>
                      <li className="cursor-pointer">Lebanese Universities CTF 2025 – Certificate of Participation (Cybersecurity Competition)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-violet-800 cursor-pointer">Leadership & Community Engagement</h4>
                    <p className="text-slate-700 cursor-pointer">Techtalks Ambassador (2025) – Promoted tech knowledge-sharing events, community building, and developer empowerment initiatives in Lebanon.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}