import Link from 'next/link';
import { format } from 'date-fns';
import { Button } from 'react-bootstrap';

const EventDetails = ({ startDate, endDate, location, organiser, websiteLink }) => {
  return (
    <>
       <h2 className='text-center mt-5 mb-3 heading-sm'>Event Details</h2>
      <div className="event-details-container">
        <h4 className='text-dark d-block'>Start date: {format(new Date(startDate), 'do MMMM yyyy')}</h4>
        <h4 className='text-dark d-block'>End date: {format(new Date(endDate), 'do MMMM yyyy')}</h4>
        <h4 className='text-dark d-block'>Location: {location}</h4>
        {organiser && <h4 className='text-dark d-block'>Organiser: {organiser}</h4>}
        <Link href={websiteLink} passHref>
          <Button variant='outline-dark' target='_blank'>Visit Organiser's Website</Button>
        </Link>
      </div>
    </>
  );
}
 
export default EventDetails;