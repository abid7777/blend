import { uniqueNamesGenerator, starWars } from 'unique-names-generator';

const { error } = console;
const config = {
  dictionaries: [starWars],
};

export const getUsername = () => uniqueNamesGenerator(config);

export const getAvatarURL = (name) => `https://avatars.dicebear.com/api/avataaars/${encodeURIComponent(name)}.svg`;

export const getAvatarRaw = async (name) => {
  try {
    const avatarURL = getAvatarURL(name);
    const res = await fetch(avatarURL);
    const raw = await res.text();

    return raw;
  } catch (e) {
    error.log(`error creating avatar blob: ${e.message}`);

    return null;
  }
};
