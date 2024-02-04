import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () => {
    const paths = allPosts.map((post) => ({ slug: post.id }))
    return paths
}

export const generateMetadata = ({ params }: { params: { id: number } }) => {
    const post = allPosts.find((post) => post.id == params.id)
    if (!post) throw new Error(`Post not found for id: ${params.id}`)
    return { title: post.title }
}

export default async function Page({ params }: { params: { id: number } }) {
    const post = allPosts.find((post) => post.id == params.id)
    if (!post) throw new Error(`Post not found for id: ${params.id}`)

    const MDXContent = useMDXComponent(post.body.code)

    return (
        <article className="mx-auto max-w-xl py-8 pt-32 pb-10 md:pt-40 md:pb-16">
            <div className="max-w-3xl mx-auto text-center pb-8">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <time dateTime={post.date} className="mb-1 text-s text-text-normal">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
            </div>
            <div className="text-text-normal mx-4">
                <MDXContent />
            </div>
            <div className="pt-12 text-right">
                <a
                    href="/posts"
                    className="text-text-button hover:text-text-normal"
                    aria-label="Back to the posts"
                >
                    <u>&larr; Back to the posts</u>
                </a>
            </div>
        </article>
    )
}
