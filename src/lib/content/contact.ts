import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "let's connect",
  paragraphs: [
    "I'm always interested in new collaborations and opportunities in the web development and SaaS space.",
    "Whether you want to discuss a project, explore potential partnerships, or just connect with a fellow indie hacker, feel free to reach out!",
  ],
  link: `mailto:${author.email}`,
};
