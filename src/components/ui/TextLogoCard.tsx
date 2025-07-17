'use client';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';

import { ProjectType } from '@/lib/types';

const TextLogoCard = ({
  name,
  url,
  repo,
  year,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  return (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <button
        onClick={(e) => {
          // Don't run this if the clicked target is an anchor element
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url);
        }}
        className="block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl"
      >
        <div className="overflow-hidden h-[200px] flex items-center justify-center bg-gradient-to-br from-bg-secondary to-accent/10">
          <h3 className="font-agustina text-4xl text-accent">{name}</h3>
        </div>
        <div className="p-4 py-3 space-y-1">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs capitalize">{tags.join(' | ')}</p>
            <div className="flex items-center space-x-1.5">
              <a
                href={repo}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={20} height={20} />
              </a>
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="ci:external-link" width={22} height={22} />
              </a>
            </div>
          </div>
          <h4 className="flex justify-between font-medium capitalize duration-200 group-hover:text-accent">
            <span>{name}</span>
            <span className="mr-1">{year}</span>
          </h4>
        </div>
      </button>
    </motion.div>
  );
};

export default TextLogoCard;
