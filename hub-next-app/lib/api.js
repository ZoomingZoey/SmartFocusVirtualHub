
import { getArticleDate } from "./helpers";

export function getStrapiURL(path="") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;
}

export function sortArticlesByDate(articles) {
  const sorted = articles.sort((articleA, articleB) => {
    return (getArticleDate(articleB) - getArticleDate(articleA))
  });
  return sorted;
}

export function getTop4Articles(articles) {
  return articles.slice(0, 4);
}

export async function fetchAPI(path) {
  const requestURL = getStrapiURL();
  const res = await fetch(`${requestURL}/api${path}`);
  const data = await res.json();
  return data.data;
}
