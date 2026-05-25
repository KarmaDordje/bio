import { defineType, defineField } from 'sanity'

export const plantCategory = defineType({
  name: 'plantCategory',
  title: 'Kategoria Roślin',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
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
