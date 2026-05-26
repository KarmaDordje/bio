import { type SchemaTypeDefinition } from 'sanity'
import { news } from './news'
import { project } from './project'
import { plant } from './plant'
import { plantCategory } from './plantCategory'
import { about } from './about'
import { seo } from './seo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, project, plant, plantCategory, about, seo],
}
