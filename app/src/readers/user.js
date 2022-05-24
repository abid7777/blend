import _property from 'lodash/property';

export default {
  image: _property('image'),
  name: _property('name'),
  slug: _property('slug.current'),
  status: _property('status'),
};
