import Thumbnail from './Thumbnail';
import Link from 'next/link';

import { getStrapiURL } from '../lib/api';

const ArticleCard = ({ id, title, typePrefix, route, slug, imageSrc }) => {
  return (
    <div>
      <Link key={id} href={`${route}/${slug}`}>
        <a className="article-card-link">
          <Thumbnail
            aspectRatio="1:1"
            containerClassNames="mb-3"
            imageClassNames="article-card-image shadow rounded"
            src={getStrapiURL(imageSrc)}
          />
          <h4>{typePrefix && (<strong>{typePrefix}:</strong>)} {title}</h4>
        </a>
        
      </Link>
    </div>
  );
}
 
export default ArticleCard;