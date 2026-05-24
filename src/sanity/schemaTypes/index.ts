import { type SchemaTypeDefinition } from 'sanity'
import { news } from './news'
import { project } from './project'
import { fuel } from './fuel'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, project, fuel],
}
