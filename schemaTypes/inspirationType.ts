import {defineField, defineType} from 'sanity'

export const inspirationType = defineType({
  name: 'inspiration',
  title: 'Inspiration',
  type: 'document',
  fields: [
    defineField({
      name: 'media',
      title: "Media",
      type: 'file',
      options: {
        accept: 'image/*,video/*',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'mediaType',
        title: "Media Type",
        type: 'string',
        options: {
            list: [
                {title: 'Image', value: 'image'},
                {title: 'Video', value: 'video'},
            ]
        },
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'title',
        title: "Title",
        type: 'string',
    }),
    defineField({
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
        validation: (rule) => rule.required(),
    })
  ],
})