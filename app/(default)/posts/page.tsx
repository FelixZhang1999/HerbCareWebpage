import ListLayout from "@/components/listLayout"
import { allPosts } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export const metadata = {
  title: 'HerbCare posts',
  description: 'Posts about Herbcare and traditional Chinese medicine.',
}

const POSTS_PER_PAGE = 1

export default function Home() {
  const posts = allCoreContent(sortPosts(allPosts))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <main>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </main>
  )
}
