import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { fetchAPI, sortArticlesByDate } from './api';
const qs = require('qs');

export function getArticleDate(article) {
  const date = article.attributes.backdated_publish_date ? new Date(article.attributes.backdated_publish_date) : new Date(article.attributes.publishedAt);
  return date;
}

function _capitalize(str) {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeArrayOfWords(words) {
  let capitalizedWords = [];

  for (const word of words) {
    const newWord = _capitalize(word);
    capitalizedWords.push(newWord);
  }

  return capitalizedWords;
}

export function capitaliseString(str, sep=' ') {
  if (typeof(str) === 'undefined' || str === null) return;

  const words = str.split(sep);
  return capitalizeArrayOfWords(words).join(' ');
}

export function getRouteFromContentType(content_type) {
  switch(content_type) {
    case 'research-paper': return '/research-papers'
    case 'case-study': return '/case-studies'
    case 'news': return '/news'
    case 'event': return '/events'
    case 'podcast': return '/podcasts'
    default: return false;
  }
}

export function processMarkdown(text) {
  const md = new MarkdownIt({ html: true });
  const rendered_content = md.render(sanitizeHtml(text));
  return rendered_content;
}

export function toHHMMSS(totalsecs) {
  var sec_num = parseInt(totalsecs, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  var time = `${hours > 0 ? `${hours < 10 ? "0" + hours + ":" : ""}` : ""}${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return time;
}

function _containsKeyword(article, keyword) {
  const index = article.attributes.keywords.findIndex(item => item.toLowerCase() === keyword.toLowerCase());
  if (index > -1) {
    return true;
  }

  return false;
}

function _matchesArticle(articleA, articleB) {
  return (
    articleA.attributes.content_type === articleB.attributes.content_type &&
    articleA.attributes.slug === articleB.attributes.slug
  );
}

function containsKeywords(article, keywords) {
  // Return if the article has no keywords
  if (article.attributes.keywords === 'undefined' || article.attributes.keywords === null) {
    return false;
  }
    
  // Iterate over the keywords, return true as soon as a keyword matches a keyword contained in the article's keywords array
  for (const keyword of keywords) {
    if (_containsKeyword(article, keyword)) {
      return true;
    }
  }
  return false;
}

export async function getRelatedArticles(selectedArticle) {
  // Array to hold related articles
  let related = [];

  // Return if the selected article has no keywords
  if (selectedArticle.attributes.keywords === 'undefined' || selectedArticle.attributes.keywords === null) {
    return related;
  }

  // Fetch all articles
  const query_articles = qs.stringify({
    populate: {
      thumbnail_image: {
        fields: ['url']
      }
    }
  }, {
    encodeValuesOnly: true,
  });
  const research_papers = await fetchAPI(`/research-papers?${query_articles}`);
  const case_studies = await fetchAPI(`/case-studies?${query_articles}`);
  const news_articles = await fetchAPI(`/news?${query_articles}`);
  const events = await fetchAPI(`/events?${query_articles}`);
  const podcasts = await fetchAPI(`/podcasts?${query_articles}`);

  // Spread all the fetched articles into a single array
  const all_articles = [...research_papers, ...case_studies, ...news_articles, ...events, ...podcasts];

  // Iterate over all the fetched articles
  for (const article of all_articles) {
    // If the article at the current iteration contains keywords of the selected article and is not the selected article push the article at the current iteration into the related array
    if (containsKeywords(article, selectedArticle.attributes.keywords) && !_matchesArticle(selectedArticle, article)) {
      related.push(article);
    }
  }
  
  return sortArticlesByDate(related);
}

function convertContentType(contentType) {
  switch(contentType.trim().toLowerCase()) {
    case 'research papers': return 'research-paper'
    case 'case studies': return 'case-study'
    case 'news': return 'news'
    case 'events': return 'event'
    case 'podcasts': return 'podcast'
    default: return false;
  }
}

function filterByCluster(articles, searchCluster) {
  let filteredArticles = [];

  for (const article of articles) {
    if (article.attributes.clusters) {
      for (const cluster of article.attributes.clusters.data) {
        if (cluster.attributes.name.toLowerCase() === searchCluster.trim().toLowerCase()) {
          filteredArticles.push(article);
        }
      }
    }
  }
  return filteredArticles;
}

export function filterArticles(articles, filters) {
  let filteredArticles = [...articles];

  if (filters.cluster.toLowerCase() !== 'all') {
    filteredArticles = filterByCluster(filteredArticles, filters.cluster);
  }

  if (filters.contentType.toLowerCase() !== 'all') {
    filteredArticles = filteredArticles.filter(v => v.attributes.content_type.trim().toLowerCase() === convertContentType(filters.contentType));
  }
  return filteredArticles;
}

export function getArticleHeaderImage(article) {
  const headerImage = article.attributes.header_image.data ? article.attributes.header_image : article.attributes.thumbnail_image;
  return headerImage;
}