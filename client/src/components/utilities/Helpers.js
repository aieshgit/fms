/* export function plus(a, b) {
    return a + b;
  }
 */
export function customSort(a, b, order, dataField) {
  if (order === "asc" || !order) {
    return b.localeCompare(a, navigator.languages[0] || navigator.language, {
      numeric: true,
      ignorePunctuation: true,
    });
  }
  return a.localeCompare(b, navigator.languages[0] || navigator.language, {
    numeric: true,
    ignorePunctuation: true,
  });
}
