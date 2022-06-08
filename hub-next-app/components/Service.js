import {
  Row,
  Col
} from 'react-bootstrap';

const Service = ({ name, description, imageSrc, imageOnLeft }) => {
  return (
      <Row className='service'>
        <Col xs={12} md={6}>
          <h3 className='heading-sm'>{name}</h3>
          <p>{description}</p>
        </Col>
        <Col xs={12} md={6} className={imageOnLeft ? 'order-md-first' : 'text-end'}>
          <img src={imageSrc} className='img-fluid rounded'/>
        </Col>
      </Row>
  );
}

Service.defaultProps = {
  imageOnLeft: false
};
 
export default Service;