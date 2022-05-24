export default async function fetchClient(url, options = {}) {
  const res = await fetch(url, options);

  if (res.status < 200 || res.status > 299) {
    const error = await res.json();

    throw error;
  }

  const data = await res.json();

  return data;
}
