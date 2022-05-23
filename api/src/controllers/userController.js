import { createUserDoc } from '../utils/doc.js';
import { getAvatarRaw, getUsername } from '../utils/user.js';
import sanityClient from '../utils/sanityClient.js';

export async function createUser(_, res) {
  try {
    const avatarRaw = await getAvatarRaw();
    const imageRef = await sanityClient.uploadAsset('image', Buffer.from(avatarRaw));
    const name = getUsername();
    const user = await sanityClient.create(createUserDoc({ name, imageRef }));

    res.send(user);
  } catch (e) { console.log(e); res.send('ok'); }
}

export function updateUser(_, res) {
  res.send('ok');
}
