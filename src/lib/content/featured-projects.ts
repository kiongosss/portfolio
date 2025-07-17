import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'TesaDeal',
      description: 'An innovative e-commerce platform built from the ground up.',
      tasks:
        'Developed the entire platform from concept to launch, including frontend UI, backend infrastructure, payment processing, and user authentication systems. Built with modern web technologies to ensure scalability and performance.',
      url: 'https://tesadeal.com/',
      img: '/projects/tesadeal-featured.png',
      tags: [
        'Next.js',
        'React',
        'Node.js',
        'E-commerce',
        'Payment Integration',
        'UI/UX Design',
      ],
    },
    {
      id: getId(),
      name: 'FlexCash',
      description: 'A web application for competitive leaderboard payments.',
      tasks:
        'Designed and developed a unique platform that allows users to pay their way onto a leaderboard. Implemented secure payment processing, real-time leaderboard updates, and user authentication features.',
      url: 'https://github.com/kiongosss/flexcash',
      img: '/projects/flexcash-featured.png',
      tags: ['React', 'Payment Processing', 'Leaderboard', 'User Authentication'],
    },
    {
      id: getId(),
      name: 'TinySoko',
      description:
        'A secure marketplace for buying and selling social media accounts.',
      tasks:
        'Built a comprehensive platform with escrow functionality to ensure safe transactions between users. Implemented listing management, user profiles, search functionality, and secure transaction processing.',
      url: 'https://github.com/kiongosss/tinysoko',
      img: '/projects/tinysoko-featured.png',
      tags: ['Marketplace', 'Escrow', 'Social Media', 'Security'],
    },
    /*   {
      id: getId(),
      name: 'Integra',
      description: 'An AI-Powered Leads Generation Platform.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
      url: 'https://www.integraleads.xyz/',
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Express'],
    }, */

    {
      id: getId(),
      name: 'Drafton',
      description: 'The AI-powered platform that simplifies proposal creation.',
      tasks:
        'I designed and developed the landing page and implemented the dashboard by creating a user interface and integrating APIs.',
      url: 'https://www.drafton.io/',
      img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
      tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },
  ],
};

export default featuredProjectsSection;
