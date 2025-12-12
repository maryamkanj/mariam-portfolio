import ContactGrid from '@/components/contact/ContactGrid';
import PageTransition from '@/components/ui/PageTransition';

export const metadata = {
  title: 'Contact | Mariam Kanj',
  description: 'Get in touch with me for collaboration opportunities, projects, or just to say hello.',
};

export default function Contact() {
  const ClockIcon = () => (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const LightbulbIcon = () => (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );

  const TargetIcon = () => (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const responseDetails = [
    { icon: <ClockIcon />, title: "Response Time", text: "Within 24 hours" },
    { icon: <LightbulbIcon />, title: "Include", text: "Project details or specific questions" },
    { icon: <TargetIcon />, title: "Status", text: "Open to new opportunities" }
  ];

  return (
    <div className="flex-grow bg-black-main min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative overflow-hidden w-full">
      {/* Background effects matching homepage */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <PageTransition>
          <header className="text-center mb-6 sm:mb-8">
            <div className="inline-block mb-2 sm:mb-3">
              <span className="text-primary text-xs sm:text-sm font-medium tracking-widest uppercase">Connect With Me</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-white/70 text-sm sm:text-base mb-2">Let's work together</p>
            <div className="w-20 h-0.5 sm:w-24 sm:h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full mb-3 sm:mb-4"></div>
            <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto px-2">
              Available for new projects and opportunities. Reach out through any channel below.
            </p>
          </header>

          <ContactGrid />

          <div className="bg-black-main/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 border border-white/5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 card-hover mb-8 sm:mb-10">
            <div className="text-center mb-2 sm:mb-3">
              <span className="text-primary text-xs sm:text-sm font-medium tracking-widest uppercase">Communication</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Response Details</h2>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 text-center">
              {responseDetails.map((item, index) => (
                <div key={index}>
                  <div className="text-primary mb-1 sm:mb-2 flex justify-center">{item.icon}</div>
                  <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </PageTransition>
      </div>
    </div>
  );
}