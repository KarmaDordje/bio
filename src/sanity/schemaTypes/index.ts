import { type SchemaTypeDefinition } from 'sanity'
import { news } from './news'
import { project } from './project'
import { fuel } from './fuel'
import { plant } from './plant'
import { plantCategory } from './plantCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, project, fuel, plant, plantCategory],
}
