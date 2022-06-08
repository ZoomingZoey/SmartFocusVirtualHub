// Import components
import ArticleCard from './ArticleCard';
import { getRouteFromContentType, capitaliseString } from '../lib/helpers';

const ArticleCardGrid = ({ articles, prefixType }) => {
  return (
    <div className='grid-container mx-auto'>
      {articles.map((article) => (
          <ArticleCard
            key={article.attributes.slug}
            id={article.id}
            title={article.attributes.title}
            typePrefix={prefixType ? capitaliseString(article.attributes.content_type, '-') : false}
            route={getRouteFromContentType(article.attributes.content_type)}
            slug={article.attributes.slug}
            imageSrc={article.attributes.thumbnail_image.data.attributes.url}
          />
        ))
      }
    </div>
  );
}
 
export default ArticleCardGrid;