/* eslint-disable import/prefer-default-export */

import { userSerializer } from '../serializers/user';
import fetchClient from '../utils/fetchClient';

const API_ENDPOINT = 'http://localhost:3001/api/v1/user';

export const fetchUser = async () => {
  const userData = await fetchClient(API_ENDPOINT, { method: 'POST' });

  return userSerializer(userData);
};
