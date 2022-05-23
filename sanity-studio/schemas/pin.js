export default {
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'user' },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'comment' } }]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'savedByUsers',
      title: 'Saved By Users',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'user' } }],
    },
  ],
};
