'use client'

import type { Post } from 'contentlayer/generated'
import { usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import { useState } from 'react'

interface PaginationProps {
    totalPages: number
    currentPage: number
}
interface ListLayoutProps {
    posts: CoreContent<Post>[]
    title: string
    initialDisplayPosts?: CoreContent<Post>[]
    pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
    const pathname = usePathname()
    const basePath = pathname.split('/')[1]
    const prevPage = currentPage - 1 > 0
    const nextPage = currentPage + 1 <= totalPages

    return (
        <div className="max-w-sm mx-auto pt-12 px-4 sm:px-6 relative">
            <nav className="flex justify-between">
                {!prevPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
                        Previous
                    </button>
                )}
                {prevPage && (
                    <a
                        href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
                        rel="prev"
                    >
                        Previous
                    </a>
                )}
                <span>
                    {currentPage} of {totalPages}
                </span>
                {!nextPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
                        Next
                    </button>
                )}
                {nextPage && (
                    <a href={`/${basePath}/page/${currentPage + 1}`} rel="next">
                        Next
                    </a>
                )}
            </nav>
        </div>
    )
}

export default function ListLayout({
    posts,
    title,
    initialDisplayPosts = [],
    pagination,
}: ListLayoutProps) {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts.filter((post) => {
        const searchContent = post.title + post.summary
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })

    // If initialDisplayPosts exist, display it if no searchValue is specified
    const displayPosts =
        initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="relative pt-40 pb-10 md:pt-52 md:pb-16">
                    <h1 className="h1 mb-4" data-aos="fade-left">
                        {title}
                    </h1>
                    {/* <div className="relative max-w-lg">
                        <label>
                            <span className="sr-only">Search posts</span>
                            <input
                                aria-label="Search posts"
                                type="text"
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search posts"
                                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-text-normal"
                            />
                        </label>
                        <svg
                            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div> */}
                </div>
                <ul>
                    {!initialDisplayPosts.length && 'No posts found.'}
                    {displayPosts.map((post) => {
                        const { id, date, title, summary } = post
                        return (
                        <li key={id} className="py-4">
                            <a href={`/posts/${id}`} >
                                <article className="space-y-2 " data-aos="fade-left">
                                    <div className="space-y-3 xl:col-span-3 text-text-normal hover:text-text-button">
                                        <h3 className="text-2xl font-bold leading-8 tracking-tight">
                                            {title}
                                        </h3>
                                        <time className="" dateTime={date}>{formatDate(date)}</time>
                                        <div className="prose max-w-none">
                                            {summary}
                                        </div>
                                    </div>
                                </article>
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </div>
            {pagination && pagination.totalPages > 1 && (
                <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
        </>
    )
}
