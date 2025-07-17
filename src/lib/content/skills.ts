import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building SaaS products and web applications using React, Next.js, and modern JavaScript',
        'Developing responsive and user-friendly interfaces with TailwindCSS and modern UI libraries',
        'Creating scalable backend solutions with Node.js and serverless technologies',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    {
      id: getId(),
      title: 'Product Development & Entrepreneurship',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Building and launching digital products with a focus on solving real-world problems',
        'Experience in #buildinpublic and growing online communities around products',
        'Implementing lean startup methodologies and iterative development processes',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'notion', icon: 'logos:notion-icon' },
        { name: 'github', icon: 'logos:github-icon' },
        { name: 'blockchain', icon: 'logos:ethereum' },
      ],
    },
  ],
};
