import sanityClient from '@sanity/client';

class SanityClient {
  #client;

  constructor() {
    this.#client = sanityClient({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
      apiVersion: process.env.SANITY_API_VERSION,
      token: process.env.SANITY_API_TOKEN,
      useCdn: true,
    });
  }

  async create(doc) {
    return this.#client.create(doc);
  }

  async uploadAsset(type, asset) {
    return this.#client.assets.upload(type, asset);
  }
}

export default new SanityClient();
