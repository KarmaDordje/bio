import { defineType, defineField } from 'sanity'

export const plant = defineType({
  name: 'plant',
  title: 'Plant',
  type: 'document',
  fields: [
    defineField({ name: 'varietyName', title: 'Variety Name', type: 'string' }),
    defineField({ name: 'species', title: 'Species', type: 'string' }),
    defineField({ name: 'latinName', title: 'Latin Name', type: 'string' }),
    defineField({ name: 'characteristics', title: 'Characteristics', type: 'text' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'plantCategory' }],
    }),
    defineField({ name: 'price', title: 'Price (Placeholder)', type: 'number' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'varietyName',
      subtitle: 'species',
      media: 'image',
    },
  },
})
