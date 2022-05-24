import _get from 'lodash/get';
import _omit from 'lodash/omit';
import _set from 'lodash/set';

const KEY = 'blend-db';
const INITIAL_STATE = {};

const parseData = (data) => {
  if (typeof data !== 'string' && typeof data !== 'object') { return INITIAL_STATE; }

  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_STATE;
  }
};

class LocalDB {
  #data;

  constructor() {
    this.#data = parseData(window.localStorage.getItem(KEY) || {});
  }

  get(key) {
    return _get(this.#data, key);
  }

  set(key, value) {
    _set(this.#data, key, value);

    return this;
  }

  omit(key) {
    this.#data = _omit(this.#data, key);

    return this;
  }

  async commit() {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(this.#data));
      Promise.resolve();
    } catch (e) {
      Promise.reject(e.message);
    }
  }
}

export default new LocalDB();
