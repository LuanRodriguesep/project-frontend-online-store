export async function getCategories() {
  const requestReturn = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await requestReturn.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(q = '', c = '') {
  const requestReturn = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${c}&q=${q}`);
  const categoryAndQuery = await requestReturn.json();
  return categoryAndQuery;
}
