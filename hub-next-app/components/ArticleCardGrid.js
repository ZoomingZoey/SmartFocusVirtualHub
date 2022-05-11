// Import components
import ArticleCard from './ArticleCard';
import { getRouteFromContentType, capitalizeString } from '../lib/helpers';

const ArticleCardGrid = ({ articles }) => {
  return (
    <div className='grid-container mx-auto'>
      {articles.map((article) => (
          <ArticleCard
            key={article.attributes.slug}
            id={article.id}
            title={article.attributes.title}
            titlePrefix={!(['case study', 'research paper'].includes(article.attributes.content_type)) ? capitalizeString(article.attributes.content_type) : false}
            route={getRouteFromContentType(article.attributes.content_type)}
            slug={article.attributes.slug}
            imageFilename={article.attributes.thumbnail_image.data.attributes.url}
          />
        ))
      }
    </div>
  );
}
 
export default ArticleCardGrid;