import imageURLBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

class SanityClient {
  #client;

  #urlBuilder;

  constructor() {
    this.#client = sanityClient({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
      apiVersion: process.env.SANITY_API_VERSION,
      useCdn: true,
    });
    this.#urlBuilder = imageURLBuilder(this.#client);
  }

  async query(q) {
    return this.#client.query(q);
  }

  urlFor(source) {
    try {
      return this.#urlBuilder.image(source).url();
    } catch (e) {
      return '';
    }
  }
}

export default new SanityClient();
