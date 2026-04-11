import React, {type ReactNode} from 'react'
import Link from '@docusaurus/Link'
import {translate} from '@docusaurus/Translate'
import {PageMetadata} from '@docusaurus/theme-common'
import {useDateTimeFormat} from '@docusaurus/theme-common/internal'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import type {ArchiveBlogPost, Props} from '@theme/BlogArchivePage'

type YearGroup = {
  year: string
  posts: ArchiveBlogPost[]
}

function listPostsByYears(blogPosts: readonly ArchiveBlogPost[]): YearGroup[] {
  const postsByYear = blogPosts.reduce((posts, post) => {
    const year = post.metadata.date.split('-')[0]!
    const yearPosts = posts.get(year) ?? []
    return posts.set(year, [post, ...yearPosts])
  }, new Map<string, ArchiveBlogPost[]>())

  return Array.from(postsByYear, ([year, posts]) => ({
    year,
    posts,
  }))
}

function YearPanel({year, posts}: YearGroup): ReactNode {
  const dateTimeFormat = useDateTimeFormat({
    day: '2-digit',
    month: 'short',
    timeZone: 'UTC',
  })

  return (
    <section className="archive-panel" aria-labelledby={`archive-year-${year}`}>
      <div className="archive-panel__header">
        <Heading as="h2" id={`archive-year-${year}`} className="archive-panel__year">
          {year}
        </Heading>
        <span className="archive-panel__count">
          {posts.length} {posts.length === 1 ? 'entry' : 'entries'}
        </span>
      </div>

      <ul className="archive-panel__list">
        {posts.map((post) => (
          <li key={post.metadata.permalink} className="archive-entry">
            <time className="archive-entry__date" dateTime={post.metadata.date}>
              {dateTimeFormat.format(new Date(post.metadata.date))}
            </time>
            <Link className="archive-entry__link" to={post.metadata.permalink}>
              <span className="archive-entry__title">{post.metadata.title}</span>
              {post.metadata.tags.length > 0 && (
                <span className="archive-entry__tags">
                  {post.metadata.tags.slice(0, 3).map((tag) => tag.label).join(' / ')}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function BlogArchive({archive}: Props): ReactNode {
  const title = translate({
    id: 'theme.blog.archive.title',
    message: 'Archive',
    description: 'The page title of the blog archive page',
  })
  const description = translate({
    id: 'theme.blog.archive.description',
    message: 'Chronological map of every post in the log.',
    description: 'The page description of the blog archive page',
  })

  const years = listPostsByYears(archive.blogPosts)
  const totalPosts = archive.blogPosts.length

  return (
    <>
      <PageMetadata title={title} description={description} />
      <Layout>
        <main className="archive-page">
          <section className="archive-hero">
            <div className="container">
              <div className="archive-hero__panel">
                <div className="archive-hero__eyebrow">signal index</div>
                <Heading as="h1" className="archive-hero__title">
                  {title}
                </Heading>
                <p className="archive-hero__subtitle">{description}</p>
                <div className="archive-hero__stats">
                  <div className="archive-stat">
                    <span className="archive-stat__label">Years</span>
                    <strong className="archive-stat__value">{years.length}</strong>
                  </div>
                  <div className="archive-stat">
                    <span className="archive-stat__label">Entries</span>
                    <strong className="archive-stat__value">{totalPosts}</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="archive-grid-section">
            <div className="container">
              <div className="archive-grid">
                {years.map((year) => (
                  <YearPanel key={year.year} {...year} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}
