/* eslint-disable no-underscore-dangle */

import short from 'short-uuid';

import slugify from './slugify.js';

export const createUserDoc = ({ name, imageRef }) => ({
  _type: 'user',
  name,
  slug: {
    _type: 'slug',
    current: `${slugify(name)}-${short.generate()}`,
  },
  image: {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: imageRef._id,
    },
  },
  status: 'active',
});

export const createPinDoc = () => {};
