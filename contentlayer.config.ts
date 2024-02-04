// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/posts/*.mdx`,
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

export const Herb = defineDocumentType(() => ({
    name: 'Herb',
    filePathPattern: `**/herbs/*.mdx`,
    contentType: 'mdx',
    fields: {
        name: { type: 'string', required: true },
        other_names: { type: 'string', required: false },
        image_url: {type: 'string', required: false},
        link: {type: 'string', required: false},
    },
    computedFields: {
        url: { type: 'string', resolve: (herb) => `/herbs/${herb.name}` },
    },
}))

export default makeSource({ contentDirPath: 'public', documentTypes: [Post, Herb] })