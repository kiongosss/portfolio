import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'omosayansi moka.',
  tagline: 'I build innovative web solutions and digital products.',
  description:
    "I'm an indie hacker and full-stack developer passionate about building in public. Currently focused on developing tesadeal.com and other digital products that solve real-world problems.",
  specialText: 'Open to collaboration opportunities',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
