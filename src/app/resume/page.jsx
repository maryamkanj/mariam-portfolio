import ResumeClient from '@/components/resume/ResumeClient';
import PageTransition from '@/components/ui/PageTransition';

export const metadata = {
  title: 'Resume | Mariam Kanj',
  description: 'View and download my professional resume. Details my skills, experience, and educational background.',
};

export default function Resume() {
  return (
    <div className="flex-grow bg-black-main min-h-screen px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden">
      {/* Background effects matching homepage */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        <PageTransition>
          <header className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Mariam Kanj - <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg mb-2">Full-Stack Web Developer</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full mb-4"></div>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Results-driven Computer Science graduate with hands-on experience in full-stack web development,
              mobile app development, and data analysis.
            </p>
          </header>

          <ResumeClient />
        </PageTransition>
      </div>
    </div>
  );
}