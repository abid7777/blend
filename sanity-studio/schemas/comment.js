export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: { type: 'user' },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
    },
    {
      name: 'pin',
      title: 'Pin',
      type: 'reference',
      to: { type: 'pin' },
    },
  ],
};
