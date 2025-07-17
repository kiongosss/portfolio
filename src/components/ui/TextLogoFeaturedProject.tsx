'use client';
import { FeaturedProjectType } from '@/lib/types';
import { cn } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';

interface Props extends FeaturedProjectType, MotionProps {
  align?: 'left' | 'right';
}

const TextLogoFeaturedProject = ({
  name,
  url,
  repo,
  description,
  tasks,
  tags,
  align = 'left',
  ...rest
}: Props) => {
  return (
    <>
      <motion.div
        className={cn(
          'relative hidden lg:block min-h-[280px] sm:min-h-[360px] h-full overflow-hidden lg:overflow-visible rounded-lg lg:rounded-xl shadow-lg lg:shadow-none text-center lg:text-right',
          align === 'left' && 'lg:text-left'
        )}
        {...rest}
      >
        <div
          className={cn(
            'w-full lg:max-w-[60%] absolute inset-0 h-full -z-20 lg:z-0 lg:object-contain rounded overflow-hidden shadow-2xl group',
            align === 'left' && 'ml-auto'
          )}
        >
          {/* Text Logo Display */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-secondary to-accent/10">
            <h2 className="font-agustina text-6xl text-accent p-8 text-center">{name}</h2>
          </div>
          
          <Link
            href={url || '#'}
            target="_blank"
            className="absolute inset-0 z-10 flex items-center justify-center bg-bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Icon
              icon="ci:external-link"
              width={48}
              height={48}
              className="text-accent"
            />
          </Link>
        </div>

        <div
          className={cn(
            'lg:max-w-[55%] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:px-0 px-6 py-6 lg:py-0',
            align === 'left' ? 'lg:right-0' : 'lg:left-0'
          )}
        >
          <div className="flex flex-col items-center lg:items-end gap-2 mb-4 lg:mb-5">
            <h3 className="text-accent font-medium text-sm">Featured Project</h3>
            <Link
              href={url || '#'}
              target="_blank"
              className="font-semibold text-2xl hover:text-accent transition-colors"
            >
              {name}
            </Link>
          </div>

          <div className="bg-bg-secondary shadow-xl lg:p-6 p-4 rounded-lg mb-5 lg:mb-7">
            <p className="text-sm lg:text-base">{description}</p>
          </div>

          <div className="mb-5 lg:mb-7">
            <p className="text-sm lg:text-base">{tasks}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-bg-secondary px-2 py-1 text-xs font-medium rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={repo || '#'}
              target="_blank"
              className="hover:text-accent transition-colors"
            >
              <Icon icon="tabler:brand-github" width={24} height={24} />
            </Link>
            <Link
              href={url || '#'}
              target="_blank"
              className="hover:text-accent transition-colors"
            >
              <Icon icon="ci:external-link" width={24} height={24} />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile View */}
      <motion.div
        className="lg:hidden space-y-4 px-6 py-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-2 mb-4">
          <h3 className="text-accent font-medium text-sm">Featured Project</h3>
          <Link
            href={url || '#'}
            target="_blank"
            className="font-semibold text-2xl hover:text-accent transition-colors"
          >
            {name}
          </Link>
        </div>

        {/* Text Logo Display for Mobile */}
        <div className="w-full h-[200px] flex items-center justify-center bg-gradient-to-br from-bg-secondary to-accent/10 rounded-lg shadow-lg mb-4">
          <h2 className="font-agustina text-5xl text-accent p-4 text-center">{name}</h2>
        </div>

        <div className="bg-bg-secondary shadow-xl p-4 rounded-lg mb-5">
          <p>{description}</p>
        </div>

        <div className="mb-5">
          <p>{tasks}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-bg-secondary px-2 py-1 text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={repo || '#'}
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            <Icon icon="tabler:brand-github" width={24} height={24} />
          </Link>
          <Link
            href={url || '#'}
            target="_blank"
            className="hover:text-accent transition-colors"
          >
            <Icon icon="ci:external-link" width={24} height={24} />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default TextLogoFeaturedProject;
