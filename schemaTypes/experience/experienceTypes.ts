import { defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'Tags',
      type: 'array',
      of: [defineField({
        name: 'tag',
        type: 'string'
      })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'responsibilities',
      type: 'array',
      of: [defineField({
        name: 'responsibility',
        type: 'string'
      })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      initialValue: new Date().toISOString(),
      validation: (rule) => rule.required()
    })
  ],
})
