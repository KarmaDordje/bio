import { defineType, defineField } from 'sanity'

export const plant = defineType({
  name: 'plant',
  title: 'Roślina',
  type: 'document',
  fields: [
    defineField({ name: 'varietyName', title: 'Nazwa odmiany', type: 'string' }),
    defineField({ name: 'species', title: 'Gatunek', type: 'string' }),
    defineField({ name: 'latinName', title: 'Nazwa łacińska', type: 'string' }),
    defineField({ name: 'characteristics', title: 'Charakterystyka', type: 'text' }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'reference',
      to: [{ type: 'plantCategory' }],
    }),
    defineField({ name: 'price', title: 'Cena (placeholder)', type: 'number' }),
    defineField({ name: 'image', title: 'Zdjęcie', type: 'image', options: { hotspot: true } }),
  ],
})
