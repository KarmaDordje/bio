import { defineType, defineField } from 'sanity'

export const plantCategory = defineType({
  name: 'plantCategory',
  title: 'Plant Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
  ],
})
