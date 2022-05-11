import Thumbnail from './Thumbnail';
import Link from 'next/link';

import { getStrapiURL } from '../lib/api';

const ArticleCard = ({id, title, titlePrefix, route, slug, imageFilename}) => {
  return (
    <div>
      <Link key={id} href={`${route}/${slug}`}>
        <a className="article-card-link">
          <Thumbnail
            aspectRatio="1:1"
            containerClassNames="mb-3"
            imageClassNames="article-card-image shadow rounded"
            imageSrc={getStrapiURL(imageFilename)}
          />
          <h4>{titlePrefix && (<strong>{titlePrefix}:</strong>)} {title}</h4>
        </a>
        
      </Link>
    </div>
  );
}
 
export default ArticleCard;