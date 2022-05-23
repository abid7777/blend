export  default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'pins',
      title: 'Pins',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'pin' } }],
    },
  ],
};
