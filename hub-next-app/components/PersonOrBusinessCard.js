import Thumbnail from './Thumbnail';

import { getStrapiURL } from '../lib/api';

const PersonOrBusinessCard = ({id, fullName, occupation, imageFilename}) => {
  return (
    <div key={id}>
      <Thumbnail
        aspectRatio="1:1"
        containerClassNames="mb-3"
        imageClassNames="rounded-circle"
        imageSrc={imageFilename}
      />
      <h4 className='text-center main-lead'>{fullName}</h4>
      <h4 className='text-center lead'>{occupation}</h4>
    </div>
  );
}
 
export default PersonOrBusinessCard;