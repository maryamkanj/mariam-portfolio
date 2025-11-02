const projects = [
  {
    id: 'proj-1',
    title: 'BudgetBuddy',
    description: 'A comprehensive personal finance management website that helps users track spending, set savings goals, and manage their budget effectively. Built with modern web technologies, BudgetBuddy features intuitive charts for expense tracking, goal progress monitoring, and salary allocation tools. The app provides real-time insights into your financial health with beautiful visualizations and responsive design that works seamlessly across all devices.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'Local Storage'],
    repoUrl: 'https://github.com/maryamkanj/budgetbuddy.git',
    features: [
      'Spending & Saving Tracking: Log transactions with categories and custom notes',
      'Interactive Dashboard: Pie charts for category breakdown and bar charts for trends',
      'Financial Goals: Set and track progress towards savings targets with deadlines',
      'Salary Management: Allocate monthly income across different spending categories',
      'Local Data Storage: Secure client-side data handling with no external backend',
      'Real-time Updates: Dynamic charts and progress tracking'
    ]
  },
  {
    id: 'proj-2',
    title: 'GiveLeb',
    description: 'A modern, full-stack donation platform that connects generous donors with individuals or organizations in need. Designed with transparency, security, and community engagement at its core, GiveLeb revolutionizes charitable giving in Lebanon. The platform ensures every donation reaches its intended recipient through robust verification systems and provides donors with complete visibility into how their contributions make a difference.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Laravel', 'PHP', 'MySQL'],
    repoUrl: 'https://github.com/Nour-Al-Hazzouri/donation-platform.git',
    features: [
      'Effortless Giving & Receiving: Support others or get help in just a few clicks',
      'Seamless User Experience: Easy profiles and smooth verification',
      'Engaged Community: Share ideas, follow updates, and interact',
      'Smart Admin Tools: Monitor and manage everything efficiently'
    ]
  },
  {
    id: 'proj-3',
    title: 'Yalla Match',
    description: 'A comprehensive pet adoption platform that brings people and pets together. Yalla Match makes the adoption process smooth and enjoyable with features like intelligent pet matching quizzes, community engagement tools, and appointment scheduling. The platform helps shelters showcase their animals while ensuring pets find loving homes that match their personalities and needs.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'JWT Auth'],
    repoUrl: 'https://github.com/maryamkanj/Yalla-Match.git',
    features: [
      'Browse Pets: See all lovable pets waiting for a new home',
      'Pet Matching Quiz: Find the perfect furry friend that matches your lifestyle',
      'Community Space: Post, share tips, and connect with other pet lovers',
      'Schedule Meetings: Book appointments to meet pets before adoption',
      'Admin Dashboard: Manage pets, schedules, and users with ease'
    ]
  },
    {
    id: 'proj-4',
    title: 'ThinkBoard',
    description: 'A full-stack note-taking application built with the MERN stack. Features include creating, updating, and deleting notes with a clean, responsive interface and real-time data management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Vite', 'Tailwind CSS', 'DaisyUI', 'Upstash Redis'],
    repoUrl: 'https://github.com/maryamkanj/ThinkBoard.git',
    features: [
      'Full CRUD Operations: Create, read, update, and delete notes with title and description',
    'RESTful API: Built and tested fully functional REST API with Express.js',
    'Rate Limiting: Implemented rate limiting using Upstash Redis for enhanced security',
    'MVC Architecture: Structured backend with Model-View-Controller pattern',
    'Responsive Design: Clean UI that works seamlessly across all devices',
    'MongoDB Integration: Efficient data storage and retrieval with MongoDB'
    ]
  },
  {
    id: 'proj-5',
    title: 'PosgreStore',
    description: 'A full-stack product store platform built with the PERN stack, featuring complete product management capabilities with secure rate limiting and bot detection. The application provides a polished, responsive interface for adding, updating, deleting products and theme-selecting with enterprise-grade security measures.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Vite', 'Tailwind CSS', 'DaisyUI', 'Zustand', 'ArcJet'],
    repoUrl: 'https://github.com/maryamkanj/PosgreStore.git',
    features: [
      'Complete Product Management: Add, update, and delete products with full CRUD operations',
      'Advanced Security: Rate limiting and bot detection powered by ArcJet for enterprise-level protection',
      'Theme Selection: Dynamic theme switching with DaisyUI for personalized user experience',
      'State Management: Efficient state handling using Zustand for optimal performance',
      'Relational Database: PostgreSQL with Neon for robust data management and relationships',
      'Modern Architecture: Full-stack application demonstrating scalable PERN stack workflow'
    ]
  },
   {
    id: 'proj-6',
    title: 'Instagram Clone',
    description: 'A full-stack Instagram clone built with Laravel, featuring authentication, posts, likes, comments, follows, and responsive design.',
    tech: ['Laravel 10', 'MySQL', 'Blade templates', 'Bootstrap 5', 'Vanilla JS' ,'Custom CSS','Built-in authentication' ],
    repoUrl: 'https://github.com/maryamkanj/instagram-clone.git',
    features: [
      'Built-in Authentication & Security: Registration, login, password reset, email verification',
      'Eloquent ORM & MVC: Clean and maintainable backend code with database relationships',
      'Routing & Middleware: Secure routing for APIs and app logic',
      'File & Media Handling: Upload, view, delete images',
      'Blade Templating: Dynamic, reusable frontend views',
      'Social Features: Likes, comments, follow/unfollow'
    ]
  },
  {
    id: 'proj-7',
    title: 'Eventify',
    description: 'A full-stack event booking app built with React and Node.js using GraphQL. It enables users to fetch and manage data efficiently, book events, and get live updates.',
    tech: ['React', 'React Router', 'CSS Modules', 'Context API', 'Fetch API', 'Node.js', 'Express', 'express-graphql', 'MongoDB', 'Mongoose', 'JWT'],
    repoUrl: 'https://github.com/maryamkanj/Eventify.git',
    features: [
      'GraphQL Queries & Mutations: Fetch and update only the data needed',
      'Single Endpoint: Handle queries, mutations, and subscriptions',
      'Client-Driven Control: Frontend defines returned data',
      'Typed Schema: Predictable and self-documenting APIs',
      'Real-time Updates: Subscriptions for live event info',
      'Full CRUD for Events: Efficient event creation, booking, and management'
    ]
  }

];

export default projects;