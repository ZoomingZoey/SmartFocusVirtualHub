// Import components
import PersonOrBusinessCard from '../components/PersonOrBusinessCard';

const PersonOrBusinessCardGrid = ({ entries }) => {
  return (
    <div className='grid-container mx-auto'>
      {entries.map((entry) => (
          <PersonOrBusinessCard
            key={entry.id}
            id={entry.id}
            fullName={entry.attributes.name}
            occupation={entry.attributes.occupation}
            imageFilename={entry.attributes.image.data ? getStrapiURL(entry.attributes.image.data.attributes.url) : '/images/icons/icon-no-image.jpg'}
          />
        ))
      }
    </div>
  );
}
 
export default PersonOrBusinessCardGrid;