// Import components
import PersonOrBusinessCard from '../components/PersonOrBusinessCard';
import { getStrapiURL } from '../lib/api';

const PersonOrBusinessCardGrid = ({ entries }) => {
  return (
    <div className='grid-container mx-auto mb-5'>
      {entries.map((entry) => (
          <PersonOrBusinessCard
            key={entry.id}
            id={entry.id}
            fullName={entry.attributes.name}
            occupation={entry.attributes.occupation}
            imageSrc={entry.attributes.image.data ? getStrapiURL(entry.attributes.image.data.attributes.url) : '/images/icons/icon-no-image.jpg'}
          />
        ))
      }
    </div>
  );
}
 
export default PersonOrBusinessCardGrid;