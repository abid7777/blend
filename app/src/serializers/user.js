/* eslint-disable import/prefer-default-export */

import sanityClient from '../utils/sanityClient';
import userReader from '../readers/user';

export const userSerializer = (userData) => ({
  name: userReader.name(userData),
  image: sanityClient.urlFor(userReader.image(userData)),
  slug: userReader.slug(userData),
  status: userReader.status(userData),
});
