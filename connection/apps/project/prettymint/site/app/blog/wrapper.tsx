import React, { ReactNode } from 'react';

import { ContactSection } from '../../components/ContactSection';
import { Container } from '../../components/Container';
import { FadeIn } from '../../components/FadeIn';
import { MDXComponents } from '../../components/MDXComponents';
import { PageLinks } from '../../components/PageLinks';
import { formatDate } from '../../lib/formatDate';
import { loadMDXMetadata } from '../../lib/loadMDXMetadata';

interface Author {
  name: string;
  role: string;
}

interface Article {
  id: string;
  title: string;
  date: string;
  author: Author;
}

interface BlogArticleWrapperProps {
  children: ReactNode;
  _segments: Array<any>; // Replace `any` with the actual type, if known
}

export default async function BlogArticleWrapper({
  children,
  _segments,
}: BlogArticleWrapperProps) {
  const id = _segments.at(-2);
  const allArticles = await loadMDXMetadata('blog');
  const article = allArticles.find((article) => article.id === id);
  const moreArticles = allArticles
    .filter((article) => article.id !== id)
    .slice(0, 2);

  if (!article) {
    // Handle the case where the article is not found
    return null;
  }

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="font-display mt-6 text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first text-sm text-neutral-950"
            >
              {formatDate(article.date)}
            </time>
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              by {article.author.name}, {article.author.role}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreArticles}
        />
      )}

      <ContactSection />
    </>
  );
}
