import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { structure } from './desk'

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_PROJECT_TITLE,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
