import '@/styles/global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BASE_URL } from '@/lib/constants';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Mariam Kanj | Full Stack Developer',
    template: '%s | Mariam Kanj',
  },
  description: 'Full Stack Developer Portfolio specializing in MERN stack, Next.js, and AI applications.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'Next.js', 'React', 'Node.js', 'Portfolio', 'Mariam Kanj'],
  authors: [{ name: 'Mariam Kanj' }],
  creator: 'Mariam Kanj',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: 'Mariam Kanj | Full Stack Developer',
    description: 'Building exceptional digital experiences with modern web technologies.',
    siteName: 'Mariam Kanj Portfolio',
    images: [
      {
        url: '/images/portfolio-image.png', // User will place the image here
        width: 1200,
        height: 630,
        alt: 'Mariam Kanj - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariam Kanj | Full Stack Developer',
    description: 'Building exceptional digital experiences with modern web technologies.',
    images: ['/images/portfolio-image.png'],
    creator: '@mariamkanj', // Placeholder, update if you have a specific handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}