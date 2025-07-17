'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Omosayansi Moka, an indie hacker and entrepreneur passionate about{' '}
            <Link
              href="https://twitter.com/search?q=%23buildinpublic"
              target="_blank"
              className="text-accent"
            >
              #buildinpublic
            </Link>
            .<br /> I'm a full-stack developer with a focus on creating practical digital products and web applications that solve real problems.
          </p>
          <p>
            Currently, I'm building{' '}
            <Link
              href="https://tesadeal.com"
              target="_blank"
              className="text-accent"
            >
              tesadeal.com
            </Link>
            , along with several other projects in the web development and SaaS space.
          </p>
          <p>
            My main focus these days is developing innovative web solutions, exploring new technologies, and connecting with like-minded developers and entrepreneurs.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
