'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('kanjmariam696@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const GitHubIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );

  const LightbulbIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
    </svg>
  );

  const TargetIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  );

  const contactMethods = [
    {
      platform: "GitHub",
      value: "maryamkanj", 
      description: "Code repositories and projects",
      href: "https://github.com/maryamkanj",
      icon: <GitHubIcon />,
      buttonText: "See Code"
    },
    {
      platform: "LinkedIn", 
      value: "mariamkanj",
      description: "Professional network and experience",
      href: "https://linkedin.com/in/mariamkanj",
      icon: <LinkedInIcon />,
      buttonText: "View Profile"
    },
    {
      platform: "Email",
      value: "kanjmariam696@gmail.com",
      description: "Direct contact for projects and collaboration",
      action: copyEmail,
      icon: <EmailIcon />,
      buttonText: "Copy Email"
    }
  ];

  const responseDetails = [
    { icon: <ClockIcon />, title: "Response Time", text: "Within 24 hours" },
    { icon: <LightbulbIcon />, title: "Include", text: "Project details or specific questions" },
    { icon: <TargetIcon />, title: "Status", text: "Open to new opportunities" }
  ];

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
        `}
      </style>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <header className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-2">Let's work together</p>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 mx-auto rounded-full mb-4"></div>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto px-2">
              Available for new projects and opportunities. Reach out through any channel below.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => (
              <div key={method.platform} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow hover-lift">
                <div className="text-violet-600 mb-4">{method.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{method.platform}</h3>
                <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                
                {method.platform === "Email" ? (
                  <div className="space-y-3">
                    <button
                      onClick={method.action}
                      className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors font-medium"
                    >
                      {copied ? "✓ Copied!" : method.buttonText}
                    </button>
                  </div>
                ) : (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-slate-100 text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors text-center font-medium"
                  >
                    {method.buttonText}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-12 hover-lift">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Response Details</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {responseDetails.map((item, index) => (
                <div key={index}>
                  <div className="text-violet-600 mb-2 flex justify-center">{item.icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}