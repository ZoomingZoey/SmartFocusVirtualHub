
export function getArticleDate(article) {
  if (article.attributes.content_type === 'event') {
    return new Date(article.attributes.publishedAt);
  }
  return article.attributes.backdated_publish_date ? new Date(article.attributes.backdated_publish_date) : new Date(article.attributes.publishedAt)
}

export function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getRouteFromContentType(content_type) {
  switch(content_type) {
    case 'research paper': return '/research-papers-and-case-studies/research-papers'
    case 'case study': return '/research-papers-and-case-studies/case-studies'
    case 'news': return '/news-events-and-podcasts/news'
    case 'event': return '/news-events-and-podcasts/events'
    case 'podcast': return '/news-events-and-podcasts/podcasts'
    default: return false;
  }
}

export function toHHMMSS(totalsecs) {
  var sec_num = parseInt(totalsecs, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  var time = `${hours > 0 ? `${hours < 10 ? "0" + hours + ":" : ""}` : ""}${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return time;
}