import { FeaturedProjectType } from '@/lib/types';
import { cn } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';

interface Props extends FeaturedProjectType, MotionProps {
  align?: 'left' | 'right';
}

const FeaturedProjectSplit = ({
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
      {/* Desktop View */}
      <motion.div
        className={cn(
          'relative hidden lg:flex min-h-[280px] sm:min-h-[360px] h-full overflow-hidden lg:overflow-visible rounded-lg lg:rounded-xl shadow-lg lg:shadow-none',
          align === 'left' ? 'flex-row' : 'flex-row-reverse'
        )}
        {...rest}
      >
        {/* Text Logo Card */}
        <div className="w-[40%] rounded-lg shadow-2xl overflow-hidden">
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

        {/* Project Details Card */}
        <div
          className={cn(
            'w-[55%] bg-bg-secondary rounded-lg shadow-xl p-6',
            align === 'left' ? 'ml-5' : 'mr-5'
          )}
        >
          <div className="flex flex-col items-start gap-2 mb-5">
            <h3 className="text-accent font-medium text-sm">Featured Project</h3>
            <Link
              href={url || '#'}
              target="_blank"
              className="font-semibold text-2xl hover:text-accent transition-colors"
            >
              {name}
            </Link>
          </div>

          <div className="mb-5">
            <p className="text-base">{description}</p>
          </div>

          <div className="mb-5">
            <p className="text-base">{tasks}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-bg-secondary/70 px-2 py-1 text-xs font-medium rounded border border-accent/20"
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
              className="bg-bg-secondary/70 px-2 py-1 text-xs font-medium rounded border border-accent/20"
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

export default FeaturedProjectSplit;
