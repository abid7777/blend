export default function slugify(str) {
  return str.toLowerCase().replace(/[^A-Za-z0-9/\s]/, '').replace(/\s/, '-');
}
