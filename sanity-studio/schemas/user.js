export default {
  name: 'user',
  title: 'User',
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
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    },
    {
      name: 'pins',
      title: 'Pins',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'pin' } }],
    },
    {
      name: 'savedPins',
      title: 'Saved Pins',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'pin' } }],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Disabled', value: 'disabled' },
        ],
      },
    }
  ],
};
