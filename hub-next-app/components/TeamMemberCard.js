import Thumbnail from './Thumbnail';

const TeamMemberCard = ({id, fullName, occupation, imageFilename}) => {
  return (
    <div key={id} className="team-member-card">
      <Thumbnail
        aspectRatio="1:1"
        containerClassNames="mb-3"
        imageClassNames="rounded-circle"
        imageSrc={imageFilename}
      />
      <h4 className='text-center heading-sm'>{fullName}</h4>
      <h4 className='text-center lead'>{occupation}</h4>
    </div>
  );
}
 
export default TeamMemberCard;