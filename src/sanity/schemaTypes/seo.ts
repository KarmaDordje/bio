import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      description: 'Overrides the main title. Recommended: 50-60 characters.',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning('Titles should be under 60 characters for best display.'),
    }),
    defineField({
      name: 'description',
      title: 'SEO Description',
      description: 'The description shown in search results. Recommended: 150-160 characters.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('Descriptions should be under 160 characters.'),
    }),
    defineField({
      name: 'image',
      title: 'Social Image',
      description: 'Image used for social media sharing (Open Graph). Recommended: 1200x630px.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      description: 'Hide this page from search engines.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
