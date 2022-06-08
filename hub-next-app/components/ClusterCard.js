import Image from 'next/image';
import Link from 'next/link';

import { Button } from 'react-bootstrap';

const ClusterCard = ({children, name, imageSrc, link}) => {
  return (
    <div className='cluster-card'>
      <Image src={imageSrc} className='img-fluid mx-auto rounded-circle' width={300} height={300}/>
      <h3 className='heading-sm text-center'>{name}</h3>
      {children ? children : null}
      <div className='d-flex justify-content-center'>
        <Link href={link} passHref><Button variant='primary'>Learn more</Button></Link>
      </div>
    </div>
  );
}
 
export default ClusterCard;