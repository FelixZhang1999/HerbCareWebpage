// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        id: { type: 'number', required: true },
        date: { type: 'date', required: true },
        summary: {type: 'string', required: false}
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/posts/${post.id}` },
    },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })