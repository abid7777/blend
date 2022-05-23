import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import comment from './comment';
import pin from './pin';
import user from './user';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([comment, pin, user]),
});
