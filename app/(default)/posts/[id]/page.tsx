import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

export const runtime = 'edge';

export const generateStaticParams = async () => {
    const paths = allPosts.map((post) => ({ slug: post.id }))
    return paths
}

export const generateMetadata = ({ params }: { params: { id: number } }) => {
    const post = allPosts.find((post) => post.id == params.id)
    if (!post) throw new Error(`Post not found for id: ${params.id}`)
    return {
        title: post.title,
        description: post.summary
    }
}

export default async function Page({ params }: { params: { id: number } }) {
    const post = allPosts.find((post) => post.id == params.id)
    if (!post) throw new Error(`Post not found for id: ${params.id}`)

    return (
        <main>
            <article className="mx-auto max-w-2xl py-8 pt-32 pb-10 md:pt-40 md:pb-16">
                <div className="max-w-3xl mx-auto text-center pb-8">
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                    <time dateTime={post.date} className="mb-1 text-s text-text-normal">
                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                    </time>
                </div>
                <div className="text-text-normal mx-4">
                    <ReactMarkdown children={post.body.raw} rehypePlugins={[rehypeRaw]}/>
                </div>
                <div className="pt-12 text-right">
                    <a
                        href="/posts"
                        className="text-text-normal hover:text-text-button"
                        aria-label="Back to the posts"
                    >
                        <u>&larr; Back to the posts</u>
                    </a>
                </div>
            </article>
        </main>
    )
}
