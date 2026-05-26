import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'bio-cms',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ngv10dz3',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: schema.types,
  },
})
